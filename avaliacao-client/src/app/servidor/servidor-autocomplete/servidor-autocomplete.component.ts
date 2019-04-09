import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {API} from '../../app-api';
import {AuthService} from '../../core/service/auth.service';

declare let $;

@Component({
  selector: 'app-servidor-autocomplete',
  templateUrl: './servidor-autocomplete.component.html',
  styleUrls: ['./servidor-autocomplete.component.css']
})
export class ServidorAutocompleteComponent implements OnInit {

  @Output() private emitter = new EventEmitter();

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.autocomplete();
  }

  autocomplete(): void {

    const input = $('.autocomplete');
    input.autocomplete({
      source: (request, response) => {
        $.ajax({
          url: `${API}/servidores/${request.term}`,
          dataType: 'json',
          headers: {authorization: this.auth.getToken()},
          success: (data) => {
            response($.map(data, (item) => {
              return {
                label: `${item.siape} - ${item.nome}`,
                value: item.id
              };
            }));
          }
        });
      },
      select: (event, ui) => {
        input.val(ui.item.label);
        this.emitter.emit({id: ui.item.value});
        return false;
      },
      focus: (event, ui) => {
        input.val(ui.item.label);
        this.emitter.emit({id: ui.item.value});
        return false;
      }
    });

  }

}
