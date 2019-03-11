package br.edu.ufca.avaliacao.service;

import br.edu.ufca.avaliacao.model.BaseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T extends BaseEntity> {

    protected abstract JpaRepository getRepository();

    public T save(T entity) {
        return (T) getRepository().save(entity);
    }

    public List<T> findAll() {
        return getRepository().findAll();
    }

    public void delete(T entity) {
        getRepository().delete(entity);
    }

    public Optional<T> findById(Long id) {
        if (id != null)
            return getRepository().findById(id);

        return Optional.empty();
    }
}
