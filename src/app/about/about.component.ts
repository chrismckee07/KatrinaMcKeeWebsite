import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public aboutText: string;
  constructor() {
    this.aboutText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in. 
    Aliquet bibendum enim facilisis gravida neque convallis a cras semper. Tortor dignissim convallis aenean et tortor at risus viverra adipiscing. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. 
    Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Elit sed vulputate mi sit. Vel turpis nunc eget lorem dolor sed viverra. Lectus nulla at volutpat diam. Justo donec enim diam vulputate ut. 
    In tellus integer feugiat scelerisque varius morbi. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Blandit libero volutpat sed cras ornare. Consequat ac felis donec et odio pellentesque diam volutpat commodo.
    Elementum tempus egestas sed sed risus pretium quam. Consectetur libero id faucibus nisl tincidunt eget nullam non. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. 
    Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. At consectetur lorem donec massa sapien faucibus et molestie. Iaculis nunc sed augue lacus viverra. Pellentesque habitant morbi tristique senectus. 
    Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Quis hendrerit dolor magna eget est lorem ipsum. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Quis commodo odio aenean sed adipiscing diam. 
    Ut sem viverra aliquet eget. Quis blandit turpis cursus in hac. Id volutpat lacus laoreet non curabitur gravida. Facilisis magna etiam tempor orci eu lobortis. Auctor augue mauris augue neque gravida in. 
    Porta lorem mollis aliquam ut porttitor leo.

    Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Fermentum posuere urna nec tincidunt. Etiam erat velit scelerisque in. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. 
    Nibh sit amet commodo nulla facilisi. Nulla malesuada pellentesque elit eget. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Egestas maecenas pharetra convallis posuere. Maecenas accumsan lacus vel facilisis volutpat est. 
    Lectus proin nibh nisl condimentum. At elementum eu facilisis sed odio morbi quis commodo.
    Erat nam at lectus urna duis convallis convallis tellus id. Pharetra convallis posuere morbi leo. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Dolor morbi non arcu risus quis varius quam. 
    Diam maecenas ultricies mi eget mauris pharetra et ultrices. Maecenas ultricies mi eget mauris pharetra. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Quis eleifend quam adipiscing vitae proin sagittis nisl. 
    Sed blandit libero volutpat sed. Neque vitae tempus quam pellentesque nec nam aliquam sem et.

    Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Etiam non quam lacus suspendisse faucibus interdum. Ut ornare lectus sit amet est placerat in egestas. Sed turpis tincidunt id aliquet risus feugiat in ante metus. 
    Nibh sed pulvinar proin gravida. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. 
    Egestas maecenas pharetra convallis posuere morbi leo urna molestie at. Etiam sit amet nisl purus in mollis nunc sed. Diam volutpat commodo sed egestas. Enim ut sem viverra aliquet. Neque volutpat ac tincidunt vitae semper quis. 
    Faucibus in ornare quam viverra orci sagittis. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Sed sed risus pretium quam vulputate. Ac orci phasellus egestas tellus. Etiam erat velit scelerisque in dictum non consectetur. 
    Enim eu turpis egestas pretium aenean.`
   }

  ngOnInit(): void {
  }

}
