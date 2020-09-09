import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform{
   transform(value: any,searchStr: any) {
    return value.filter(function(search){
     return search.name.indexOf(searchStr) > -1
    });
   }
}
