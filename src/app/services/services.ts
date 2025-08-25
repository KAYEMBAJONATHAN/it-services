import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services = [
    {
      name: 'Wi-Fi Installation',


      description: 'Professional setup of secure, high-speed wireless networks for homes and businesses, including router configuration and signal optimization.'
    },

    {
      name: 'Router Configuration',
      description: 'Secure and optimized router setup, including SSID configuration, firewall settings, port forwarding, and device prioritization for seamless connectivity.'
    },

    {
      name: 'CCTV Setup',
      description: 'Installation and configuration of high-definition surveillance systems with remote access, motion detection, and secure data storage for 24/7 monitoring.'
    },

    {
      name: 'IT Help Desk Support',
      description: 'On-demand technical assistance for hardware, software, and network issues.'
    },

    {
      name: 'Network Setup & Suppor',
      description: 'LAN/WAN design, firewall configuration, and performance optimization.'
    },

    {
      name: 'Cloud Services',
      description: 'Migration, management, and optimization of cloud platforms (Azure, AWS).'
    },

  ]
}
