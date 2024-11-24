import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residenceId !: number ;
  listResidences: Residence[] = [
    {
      id: 1, "name": "El fel", address: "Borj Cedria",
      image: "../../assets/images/R1.jpeg", status: "Disponible"
    },
    {
      id: 2, name: "El yasmine",
      address: "Ezzahra", image: "../../assets/images/R2.jpg", status:
        "Disponible"
    },
    {
      id: 3, name: "El Arij",
      address: "Rades", image: "../../assets/images/R3.jpg", status:
        "Vendu"
    },
    {
      id: 4, name: "El Anber", address: "inconnu",
      image: "../../assets/images/R4.jpg", status: "En Construction"
    }
  ];
  residence : any;
  constructor(private route: ActivatedRoute,private routerNav: Router) {}
  ngOnInit(): void {
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));
    this.residence = this.listResidences.find(res => res.id == this.residenceId)
  }
  
  nextButton(id :number)
  {
    var index : number;
      index =this.listResidences.findIndex(res => res.id == id);

    if(index == this.listResidences.length - 1)
    {
      index = -1;
    }
    this.residence = this.listResidences[index+1];
    this.routerNav.navigate(['/residencedetails', this.residence.id]);
  }
  backButton(id : number)
  {
    var index : number;
    index =this.listResidences.findIndex(res => res.id == id);

  if(index == 0)
  {
    index = this.listResidences.length ;
  }
  this.residence = this.listResidences[index-1];
  this.routerNav.navigate(['/residencedetails', this.residence.id]);
  }

}
