package selectivecollect.system.seletinha.core.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import selectivecollect.system.seletinha.core.models.StudentModel;

import java.util.List;
import java.util.Optional;

@Repository
public interface StudentsRepository extends CrudRepository<StudentModel, Integer> {


    <Student extends StudentModel> Student save(Student entity);

    List<StudentModel> findAll();

    Optional<StudentModel> findById(Integer registry);

    void deleteById(int id);




}
