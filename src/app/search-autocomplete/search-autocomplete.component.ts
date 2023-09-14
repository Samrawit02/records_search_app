import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';


@Component({
  selector: 'app-search-autocomplete',
  templateUrl: './search-autocomplete.component.html',
  styleUrls: ['./search-autocomplete.component.css']
})
export class SearchAutocompleteComponent implements OnInit {

    paramValue: string;
    data: User[]=[];
    
    searchKey: string = ''; // Property for input text
    selectedType: string = ''; // Property for radio button selection

  constructor(
    private userService: UserService) {

  }
  ngOnInit(){
    
  
    }
    onSearch(searchKey:any){
      debugger
      this.userService.search(searchKey).subscribe((incommingData)=>{
        this.data = incommingData as User[];
        console.log(this.data)
     });

    }

}
 
