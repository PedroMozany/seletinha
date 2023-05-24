package selectivecollect.system.seletinha.core.endpoint.services;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import selectivecollect.system.seletinha.core.models.StudentModel;
import selectivecollect.system.seletinha.core.repository.StudentsRepository;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class StudentsService {

    private final StudentsRepository studentsRepository;


    public String create(final StudentModel studentModel) {
        studentsRepository.save(studentModel);
        return "SuccessFull";
    }


    public StudentModel searchId(final String registry) {
        Optional<StudentModel> student = studentsRepository.findById(Integer.valueOf(registry));
        return student.get();
    }

    public List<StudentModel> searchAll() {
        return studentsRepository.findAll();
    }

    public String update(final StudentModel studentModel) {
        studentsRepository.deleteById(studentModel.getRegistry());
        studentsRepository.save(studentModel);
        return "SuccessFull";
    }

    public String delete(final String registry) {
        studentsRepository.deleteById(Integer.valueOf(registry));
        return "SuccessFull";
    }
}
