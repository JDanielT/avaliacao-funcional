package br.edu.ufca.avaliacao.controller;

import br.edu.ufca.avaliacao.model.BaseEntity;
import br.edu.ufca.avaliacao.service.AbstractService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public abstract class AbstractController<T extends BaseEntity> {

    @GetMapping
    public ResponseEntity<List<T>> findAll() {
        return ResponseEntity.ok(getService().findAll());
    }

    @PostMapping
    public ResponseEntity save(@RequestBody
                               @Valid T entity, BindingResult errors) {

        if(errors.hasErrors()){
            return ResponseEntity.badRequest().body(getFieldsValidationErrors(errors));
        }

        return new ResponseEntity(getService().save(entity), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<T> findById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(getService().findById(id).orElse(null));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable("id") Long id) {
        T entity = getService().findById(id).orElse(null);

        if (entity != null)
            getService().delete(entity);

        return ResponseEntity.ok("");
    }

    protected abstract AbstractService<T> getService();

    public Map<String, String> getFieldsValidationErrors(Errors errors){
        return errors
                .getFieldErrors()
                .stream()
                .collect(Collectors.toMap(erro -> erro.getField().replaceAll("\\.", "_"), erro -> erro.getDefaultMessage()));
    }

}
