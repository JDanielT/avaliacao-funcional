import {BaseEntity} from '../../model/base-entity';
import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractService} from '../../service/abstract.service';
import {Observable, of} from 'rxjs';

export abstract class AbstractFormComponent<T extends BaseEntity> implements OnInit {

  private error: any;
  private entity: T;

  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private entityClass: { new(): T }) {
  }

  ngOnInit(): void {
    this.preRegister();
  }

  abstract getService(): AbstractService<T>;

  getEntity(): T {
    return this.entity;
  }

  setEntity(entity: T): void {
    this.entity = entity;
  }

  preRegister(): Observable<T> {
    const id = this.actRoute.snapshot.params.id;
    if (id) {
      this.getService().getById(id).subscribe(data => {
        return of(this.entity = data as T);
      });
    }
    return of(Object.assign(this.entity = new this.entityClass));
  }

  submit(): void {
    this.getService().save(this.entity).subscribe(data => {
      this.router.navigate([`${this.getService().context()}`]);
    }, data => {
      this.error = data.error;
    });
  }

}
