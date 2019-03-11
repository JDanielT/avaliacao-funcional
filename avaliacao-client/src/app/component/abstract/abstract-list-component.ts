import {Router} from '@angular/router';
import {BaseEntity} from '../../model/base-entity';
import {OnInit} from '@angular/core';
import {AbstractService} from '../../service/abstract.service';

export abstract class AbstractListComponent<T extends BaseEntity> implements OnInit {

  private list: T[];

  constructor(protected router: Router) {
  }

  abstract getService(): AbstractService<T>;

  ngOnInit(): void {
    this.getService().findAll().subscribe(data => this.list = data as T[]);
  }

  getList(): T[] {
    return this.list;
  }

  add(): void {
    this.router.navigate([`${this.getService().context()}/novo`]);
  }

  update(entity: T): void {
    this.router.navigate([`${this.getService().context()}/${entity.id}/editar`]);
  }

  delete(entity: T): void {
    this.getService().delete(entity.id).subscribe(data => {
      this.list = this.list.filter(item => item.id !== entity.id);
    });
  }

}

