package net.springboot.ems.services.impl;

import net.springboot.ems.dto.EmployeeDTO;
import net.springboot.ems.entity.Employee;
import net.springboot.ems.exception.ResourceNotFoundException;
import net.springboot.ems.mapper.EmployeeMapper;
import net.springboot.ems.repository.EmployeeRepository;
import net.springboot.ems.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDto) {
        Employee employee = EmployeeMapper.mapDTOtoEmp(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapEmpToDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee with id "+id+" doesn't exist"));

        return EmployeeMapper.mapEmpToDTO(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeDTO> empsDTOs = employees.stream().map(employee -> EmployeeMapper.mapEmpToDTO(employee)).collect(Collectors.toList());

        return empsDTOs;
    }

    @Override
    public EmployeeDTO updateEmployee(Long id, EmployeeDTO updateEmpDto) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with id "+id+" doesn't exist"));
        employee.setFirstName(updateEmpDto.getFirstName());
        employee.setLastName(updateEmpDto.getLastName());
        employee.setEmail(updateEmpDto.getEmail());


        Employee updatedEmp = employeeRepository.save(employee);

        return EmployeeMapper.mapEmpToDTO(updatedEmp);

    }

    @Override
    public void deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Employee with id "+id+" doesn't exist"));

        employeeRepository.deleteById(id);

    }
}
