import {BaseEntity} from '../../core/model/base-entity';
import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractService} from '../../core/service/abstract.service';
import {Observable, of} from 'rxjs';

declare let $: any;

export abstract class AbstractFormComponent<T extends BaseEntity> implements OnInit {

  private error: any;
  private entity: T;

  constructor(private router: Router,
              private actRoute: ActivatedRoute,
              private entityClass: { new(): T }) {
  }

  ngOnInit(): void {
    this.preRegister();
    this.loadMasks();
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

  private loadMasks() {
    $(document).ready(() => {
      $('.data').mask('00/00/0000');
      $('.cpf').mask('000.000.000-00', {reverse: true});
    });
  }

}
