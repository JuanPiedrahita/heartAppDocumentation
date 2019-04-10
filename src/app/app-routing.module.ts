import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';
import { StudentTestComponent } from './student-test/student-test.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'download',
		component: DownloadComponent
	},
	{
		path:'students-test',
		component: StudentTestComponent
	},
	{
		path:'home',
		component: HomeComponent
	},
	{
		path:'about',
		component: AboutComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
