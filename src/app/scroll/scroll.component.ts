import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
  text:string;
  @ViewChild('scoller1') scroller:ElementRef;

  constructor() { 
    this.text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem fringilla ut morbi tincidunt augue interdum. Scelerisque eleifend donec pretium vulputate sapien. Risus nec feugiat in fermentum posuere urna nec. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Viverra aliquet eget sit amet tellus cras. Varius quam quisque id diam vel. Consectetur adipiscing elit ut aliquam purus. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Sociis natoque penatibus et magnis dis. Eget egestas purus viverra accumsan in nisl. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Consequat semper viverra nam libero justo laoreet. Magna etiam tempor orci eu lobortis elementum nibh. Nunc aliquet bibendum enim facilisis gravida neque convallis. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Mauris in aliquam sem fringilla ut. Velit dignissim sodales ut eu sem. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Neque volutpat ac tincidunt vitae. Tristique risus nec feugiat in fermentum posuere urna. Vitae aliquet nec ullamcorper sit amet risus nullam. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. In ornare quam viverra orci. Et malesuada fames ac turpis egestas maecenas. Nunc vel risus commodo viverra maecenas accumsan.Mollis nunc sed id semper risus in hendrerit gravida. Eu scelerisque felis imperdiet proin fermentum leo. Etiam dignissim diam quis enim lobortis. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. At augue eget arcu dictum varius duis at consectetur lorem. Sed libero enim sed faucibus. Pharetra pharetra massa massa ultricies mi. Velit ut tortor pretium viverra suspendisse. Id diam vel quam elementum pulvinar. Auctor eu augue ut lectus. Id interdum velit laoreet id donec ultrices tincidunt arcu';  
  }

  ngOnInit() : void {
    const div = this.scroller.nativeElement as HTMLDivElement;
    div.addEventListener('mouseover', e =>{
      console.log ('mouse over');
    });
    div.addEventListener('mouseout', e => {
      console.log('mouse out');
    })
  }
  

}