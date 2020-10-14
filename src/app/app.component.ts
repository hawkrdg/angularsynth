import { Component, NgZone, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'WebAudio Synth';
	audioCtx;
	showHelp = false;
	@ViewChild('synth1') synth1: ElementRef;
	@ViewChild('synth2') synth2: ElementRef;

	constructor(
		private zone: NgZone
	) {}

	async ngOnInit() {
		console.log('ngOnInit()...');
		this.audioCtx = new (window as any).AudioContext();
	}

	async ngAfterViewInit() {
	}

	openHelp() {
		this.showHelp = true;
	}
	closeHelp() {
		this.showHelp = false;
	}
}
