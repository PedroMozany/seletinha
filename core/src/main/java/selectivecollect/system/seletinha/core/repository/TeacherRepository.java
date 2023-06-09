package selectivecollect.system.seletinha.core.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import selectivecollect.system.seletinha.core.models.TeachersModel;

import java.util.List;
import java.util.Optional;

@Repository
public interface TeacherRepository  extends CrudRepository<TeachersModel, Integer> {

    <Teacher extends TeachersModel> Teacher save(Teacher entity);

    List<TeachersModel> findAll();
    Optional<TeachersModel> findById(Integer registry);

    void deleteById(int id);

}
