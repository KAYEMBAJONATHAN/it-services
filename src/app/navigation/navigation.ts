import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.css']
})
export class Navigation {
  open1 = false;
  dropdownOpen1 = false;
  open2 = false;
  dropdownOpen2 = false;

  toggleDropdown1(event: MouseEvent) {
    if (this.dropdownOpen1) event.preventDefault();
    this.dropdownOpen1 = !this.dropdownOpen1;
  }

  toggleDropdown2(event: MouseEvent) {
    if (this.dropdownOpen2) event.preventDefault();
    this.dropdownOpen2 = !this.dropdownOpen2;
  }

  closeDropdowns() {
    this.open1 = false;
    this.dropdownOpen1 = false;
    this.open2 = false;
    this.dropdownOpen2 = false;
  }

  serviceCategories = [
    {
      name: 'Application',
      items: [
        { label: 'Advisory Services', route: 'advisory' },
        { label: 'Enterprise Insights', route: 'insights' },
        { label: 'Digitization', route: 'digitization' },
        { label: 'Digital Consulting', route: 'consulting' },
        { label: 'Digital Applications and Platforms', route: 'platforms' },
        { label: 'Data, BI and Analytical Services', route: 'analytics' },
        { label: 'Predictive Analysis', route: 'predictive' },
        { label: 'Data Visualization', route: 'visualization' },
        { label: 'Big Data', route: 'big-data' },
        { label: 'Data Management', route: 'data-management' },
        { label: 'Master Data Management', route: 'master-data' },
        { label: 'New Age Technologies', route: 'new-tech' },
        { label: 'Artificial Intelligence', route: 'ai' },
        { label: 'Robotic Process Automation', route: 'rpa' },
        { label: 'Blockchain', route: 'blockchain' },
        { label: 'Internet of Things', route: 'iot' }
      ]
    },
    {
      name: 'Cloud Services',
      items: [
        { label: 'Cloud Consulting Services', route: 'cloud-consulting' },
        { label: 'Cloud Canvas Services', route: 'cloud-canvas' },
        { label: 'Cloud Migration', route: 'cloud-migration' }
      ]
    },
    {
      name: 'Enterprise Services',
      items: [
        { label: 'Oracle', route: 'oracle' },
        { label: 'SAP', route: 'sap' },
        { label: 'Microsoft', route: 'microsoft' },
        { label: 'Pega', route: 'pega' },
        { label: 'Mainframe Legacy Solutions', route: 'mainframe' }
      ]
    },
    {
      name: 'Infrastructure',
      items: [
        { label: 'Call Centre & IT Helpdesk', route: 'helpdesk' },
        { label: 'Cloud Hosting Services', route: 'cloud-hosting' },
        { label: 'Cyber Security Services', route: 'cyber-security' },
        { label: 'Data Centre Transformation', route: 'dc-transformation' },
        { label: 'Data Centre Services', route: 'dc-services' },
        { label: 'DevOps', route: 'devops' },
        { label: 'End User Computing', route: 'euc' },
        { label: 'IT Security Services', route: 'it-security' },
        { label: 'Network Consulting Services', route: 'network-consulting' },
        { label: 'Network Operation Centre', route: 'noc' },
        { label: 'Network Services', route: 'network-services' },
        { label: 'Security Operation Centre', route: 'soc' },
        { label: 'Storage Services', route: 'storage' },
        { label: 'Unified Communication', route: 'unified-comm' },
        { label: 'Unified Contact Centre', route: 'contact-centre' }
      ]
    },
    {
      name: 'Development & Maintenance',
      items: [
        { label: 'IV & V Services', route: 'ivv' },
        { label: 'Managed Services', route: 'managed' }
      ]
    }
  ];

  aboutCategories = [
    {
      name: '',
      items: [
        { label: 'Alliances',
          route: 'alliances',
          message: 'Discover our strategic partnerships and how they empower our platform.'
 },
        { label: 'Overview',
          route: 'overview',
          message: 'Discover our strategic partnerships and how they empower our platform.'
         }
      ]
    }
  ];
}
