import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface CrumbConfig {
  crumbs: string[];
  paths: (string | null)[];
  icon: 'kiln' | 'cogs' | 'default';
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadCrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {

  currentPath = '';

  routeConfig: Record<string, CrumbConfig> = {
    '/home':                { crumbs: ['Process Optimization', 'Kiln OPT', 'Process Dashboard'],     paths: [null, null, null], icon: 'cogs' },
    '/dashboard':           { crumbs: ['Process Optimization', 'Kiln OPT', 'Performance Dashboard'], paths: [null, null, null], icon: 'cogs' },
    '/recommendationsList': { crumbs: ['Process Optimization', 'Kiln OPT', 'Recommendations'],       paths: [null, null, null], icon: 'cogs' },
    '/alertList':           { crumbs: ['Process Optimization', 'Kiln OPT', 'Alerts'],                paths: [null, null, null], icon: 'cogs' },
    '/equipmentList':       { crumbs: ['Process Optimization', 'Kiln OPT', 'Equipment'],             paths: [null, null, null], icon: 'cogs' },
    '/disturbanceOrder':    { crumbs: ['Process Optimization', 'Kiln OPT', 'Tag List'],              paths: [null, null, null], icon: 'cogs' },
    '/adminpage':           { crumbs: ['Process Optimization', 'Kiln OPT', 'Admin Page'],            paths: [null, null, null], icon: 'cogs' },
    '/controlRange':        { crumbs: ['Process Optimization', 'Kiln OPT', 'Control Range'],         paths: [null, null, null], icon: 'cogs' },
  };

  current: CrumbConfig | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentPath = this.getPath();
    this.current = this.routeConfig[this.currentPath] || null;

    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.currentPath = this.getPath();
        this.current = this.routeConfig[this.currentPath] || null;
      });
  }

  getPath(): string {
    const hash = window.location.hash;
    return hash ? hash.replace('#', '') : this.router.url;
  }

  navigate(path: string | null): void {
    if (path) this.router.navigate([path]);
  }

  isLast(index: number): boolean {
    return index === (this.current?.crumbs.length ?? 0) - 1;
  }
}