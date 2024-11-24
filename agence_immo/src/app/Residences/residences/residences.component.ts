import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Residence } from 'src/app/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent implements OnInit {
  constructor(private router: Router) {}

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
  showAddress: boolean[] = [];
  favoris: Residence[] = [];
  filterResidences : Residence[] = this.listResidences;
  ngOnInit(): void {
    for (let i = 0; i < this.listResidences.length; i++)
      this.showAddress[i] = false;
  }
  buttonLocation(index: number): void {
    this.showAddress[index] = !this.showAddress[index];
    if (this.listResidences[index].address == "inconnu") {
      alert(" l'adresse de cette résidence est « inconnu »");
      this.showAddress[index] = false;
    }
  }
  buttonLike(residence: Residence): void {
    if (!this.favoris.includes(residence))
      this.favoris.push(residence);
    else
      this.favoris.splice(this.favoris.indexOf(residence), 1);
  }
  search(event:Event):void {
    let searchText:string = (event.target as HTMLInputElement).value;
    this.filterResidences = this.listResidences.filter(res => res.address.toLowerCase().includes(searchText.toLowerCase()));
  }
    viewDetails(residence: any): void {
    this.router.navigate(['/residencedetails', residence.id], { state: { residence } });
  }
}
