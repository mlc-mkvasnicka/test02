import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { Observer } from 'rxjs/Observer'

const templateUrl = './app-main.htm';
@Component({
	selector: 'app-main',
	moduleId: module.id,
	templateUrl: templateUrl
})
export class AppMainComponent {
	name: string;
	bar: Observable<number>;
	constructor() {
		this.name = `Angular! v${VERSION.full}`
	}

	MyClick() {
		this.bar = Observable.create((observer: Observer<number>) => {
			console.log('Hello');
			observer.next(42);
			observer.next(100);
			observer.next(200);
			setTimeout(() => {
				observer.next(300);
			}, 1000);
		});

		console.log('before');
		this.bar.subscribe((x) => console.log(x));
		console.log('after');
	}
}
