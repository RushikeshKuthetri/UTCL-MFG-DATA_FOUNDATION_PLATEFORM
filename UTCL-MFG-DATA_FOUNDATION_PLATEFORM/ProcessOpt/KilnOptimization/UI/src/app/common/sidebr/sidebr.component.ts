import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ThemeService } from '../../services/theme.service';

export interface MenuItem {
  name: string;
  icon: string;
  path: string;
  hasDropdown?: boolean;
  children?: MenuItem[];

  moduleKey?: string;     // NEW
  roles?: string[];       // NEW
  openInNewTab?: boolean; // NEW

}

export const MENU_ITEMS: MenuItem[] = [

  { name: 'Mimics', icon: 'network', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/mimics', moduleKey: 'Mimics', openInNewTab: false },

  { name: 'Data Download', icon: 'download', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/datadownload', moduleKey: 'Mimics', openInNewTab: false },

  { name: 'Trends', icon: 'trend', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/mimics/viewtrends', moduleKey: 'Mimics', openInNewTab: false },

  { name: 'Report', icon: 'report', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/reports/reportList', moduleKey: 'Mimics', openInNewTab: false },

  { name: 'Tag Utility', icon: 'link', path: 'https://tag_utility.akxatechapps.com/', moduleKey: 'Mimics', openInNewTab: true },

  {
    name: 'CBM',
    icon: 'wrench',
    path: '',
    moduleKey: 'CBM',
    hasDropdown: true,
    openInNewTab: false,
    children: [
      { name: 'Equipment Template', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/cbm/templates', moduleKey: 'CBM', openInNewTab: false },
      { name: 'Email Template', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/cbm/EmailTemplateList', moduleKey: 'CBM', openInNewTab: false },
      { name: 'Cyclone View List', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/cbm/cyclonelist', moduleKey: 'CBM', openInNewTab: false },
    ],
  },

  {
    name: 'Charts Visualization',
    icon: 'chart',
    path: '/mimics/chartspage',
    moduleKey: 'OPT',
    openInNewTab: false,
  },

  {
    name: 'Process Optimization',
    icon: 'cogs',
    path: '',
    moduleKey: 'OPT',
    hasDropdown: true,
    children: [
      { name: 'Blaine Prediction', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/blaine/#/home', moduleKey: 'OPT', openInNewTab: false },

      {
        name: 'Cement OPT',
        icon: '',
        path: '',
        moduleKey: 'OPT',
        hasDropdown: true,
        children: [
          { name: 'Home', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/cement/#/home', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Dashboard', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/cement/#/dashboard', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Recommendation', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/cement/#/recommendationsList', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Admin', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/cement/#/adminpage', moduleKey: 'OPT', openInNewTab: false },
        ],
      },

      {
        name: 'Kiln OPT',
        icon: '',
        path: '',
        moduleKey: 'OPT',
        hasDropdown: true,
        children: [
          { name: 'Performance Dashboard', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/dashboard', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Process Dashboard', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/home', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Recommendations', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/recommendationsList', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Alerts', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/alertList', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Equipment', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/equipmentList', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Tag List', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/disturbanceOrder', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Admin Page', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/adminpage', moduleKey: 'OPT', openInNewTab: false },
          { name: 'Control Range Page', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/klin/#/controlRange', moduleKey: 'OPT', openInNewTab: false },
        ],
      },
    ],
  },
  {
    name: 'Help',
    icon: 'help',
    path: '',
    moduleKey: 'Mimics',
    openInNewTab: false,
},

  {
    name: 'Admin',
    icon: 'admin',
    path: '',
    moduleKey: 'Admin',
    hasDropdown: true,
    children: [
      { name: 'User List', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/dashboard/datatable', roles: ['admin', 'super_admin'] },
      { name: 'Access Logs', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/logs', roles: ['admin', 'super_admin'] },
      { name: 'Sent Email Logs', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/emailLogs', roles: ['admin', 'super_admin'] },
      { name: 'Alerts', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/mimicLineAlerts', roles: ['super_admin'] },
      { name: 'Alert For Blaine', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/blainealerts', roles: ['super_admin'] },
      { name: 'Alert For Kiln', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/kilnalerts', roles: ['super_admin'] },
      { name: 'CBM Templates', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/alltemplates', roles: ['super_admin'] },
      { name: 'Kiln Master', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/kilnmaster', roles: ['super_admin'] },
      { name: 'Utilization', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/utilization', roles: ['super_admin'] },
      { name: 'Settings', icon: '', path: 'https://dev.d24ohd8z0zwg7d.amplifyapp.com/admin/Dashboard/settings', roles: ['admin', 'super_admin'] },
    ],
  },

];

export const SVG_WIDTH = 20;
export const SVG_HEIGHT = 32;
export const VERTICAL_LINE_X = 8;
export const LINE_WIDTH = 1.5;
export const MID_Y = SVG_HEIGHT / 2; 
export const CURVE_START_Y = SVG_HEIGHT * 0.6875;
export const CURVE_END_Y = SVG_HEIGHT * 0.875;
export const CURVE_RADIUS = CURVE_END_Y - CURVE_START_Y;

@Component({
  selector: 'app-sidebr',
  templateUrl: './sidebr.component.html',
  styleUrls: ['./sidebr.component.scss'],
})
export class SidebrComponent implements OnInit {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  @Input() collapsed = false;
  @Output() collapsedChange = new EventEmitter<boolean>();

  // ✅ REMOVED: theme = 'light'  ← was duplicate with getter below
  mounted = false;
  menuItems = MENU_ITEMS;
  filteredMenu: MenuItem[] = [];

  modules: string[] = [];
  role: string = '';
  currentPath = '';

  openDropdowns: Record<string, boolean> = {};

  SVG_WIDTH = SVG_WIDTH;
  SVG_HEIGHT = SVG_HEIGHT;
  VERTICAL_LINE_X = VERTICAL_LINE_X;
  LINE_WIDTH = LINE_WIDTH;
  MID_Y = MID_Y;
  CURVE_START_Y = CURVE_START_Y;
  CURVE_END_Y = CURVE_END_Y;
  CURVE_RADIUS = CURVE_RADIUS;

  constructor(private router: Router, public themeService: ThemeService) {
    this.router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((e: any) => (this.currentPath = e.urlAfterRedirects));
  }

  // ✅ ONLY theme source — reads from ThemeService
  get theme(): string {
    return this.themeService.current;
  }

  // ngOnInit(): void {
  //   this.mounted = true;
  //   this.currentPath = this.router.url;
  //   // ✅ REMOVED: old localStorage + classList logic
  //   // ThemeService.init() in AppComponent handles theme restoration
  // }

  ngOnInit(): void {
    this.mounted = true;
    this.currentPath = this.router.url;

    // modules from localStorage
    const modules = localStorage.getItem('modules');
    this.modules = modules ? JSON.parse(modules) : [];

    // role from token/localStorage
    const token = sessionStorage.getItem('token');
    if (token) {
      const parsed = JSON.parse(token);
      this.role = parsed?.Role || '';
    }

    this.applyMenuFiltering();
  }

  applyMenuFiltering(): void {

    this.filteredMenu = this.menuItems
      .filter((item) => {

        // Admin always visible
        if (item.moduleKey === 'Admin') return true;

        if (item.moduleKey && !this.modules?.includes(item.moduleKey)) {
          return false;
        }

        return true;
      })
      .map((item) => {

        if (!item.children) return item;

        let filteredChildren = item.children;

        if (item.moduleKey === 'Admin') {

          filteredChildren = item.children.filter(
            child => !child.roles || child.roles.includes(this.role)
          );

        } else {

          filteredChildren = item.children.filter(
            child => !child.moduleKey || this.modules?.includes(child.moduleKey)
          );

        }

        return { ...item, children: filteredChildren };

      })
      .filter((item) => {

        if (item.children && item.children.length === 0) return false;

        return true;

      });
  }
  handleNavigation(item: MenuItem): void {

    console.log("Clicked menu:", item);

    if (!item.path) return;
    if (item.name === 'Trends') {
      localStorage.setItem('collapsed', 'true');
      // this.collapsedChange.emit(true); // update parent state
    }
    const fullUrl = item.path.startsWith('http')
      ? item.path
      : window.location.origin + item.path;

    console.log("Navigating to:", fullUrl);

    if (item.openInNewTab) {
      window.open(fullUrl, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = fullUrl;
    }
  }


  isActiveRoute(path: string): boolean {
    return !!path && this.currentPath === path;
  }

  // ✅ Delegates fully to ThemeService
  toggleTheme(): void {
    this.themeService.toggle();
  }

  get lineColor(): string {
    return this.theme === 'dark' ? '#7E8383' : '#9FACAC';
  }

  closeMobile(): void {
    this.openChange.emit(false);
  }

  toggleCollapsed(): void {
    this.collapsedChange.emit(!this.collapsed);
  }

  toggleDropdown(key: string): void {
    this.openDropdowns[key] = !this.openDropdowns[key];
  }

  isDropdownOpen(key: string): boolean {
    return !!this.openDropdowns[key];
  }

  handleParentClick(item: MenuItem): void {
    if (!item.hasDropdown) return;
    if (this.collapsed) {
      this.collapsedChange.emit(false);
      setTimeout(() => this.toggleDropdown(item.name), 310);
    } else {
      this.toggleDropdown(item.name);
    }
  }

 getCurvedPath(): string {
    const spineX = VERTICAL_LINE_X;
    const radius = 10;
    const curveStartY = MID_Y - radius;
    return `M ${spineX} 0
            L ${spineX} ${curveStartY}
            Q ${spineX} ${MID_Y} ${spineX + radius} ${MID_Y}
            L ${SVG_WIDTH} ${MID_Y}`;
}

  isChildActive(children: MenuItem[] = [], currentPath: string): boolean {
    return children.some(
      (c) => currentPath === c.path || this.isChildActive(c.children ?? [], currentPath)
    );
  }

getVerticalLineHeight(child: MenuItem, nestedOpen: boolean): string {
    if (nestedOpen && child.hasDropdown && child.children?.length) {
        // SVG_HEIGHT (child row) + grandchildren ki height
        // Last grandchild tak nahi jaani chahiye isliye -1
        return `${SVG_HEIGHT + (child.children.length - 1) * SVG_HEIGHT}px`;
    }
    return `${SVG_HEIGHT}px`;
}
}