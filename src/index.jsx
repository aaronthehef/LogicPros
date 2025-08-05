// Removed Material-UI imports
import React from "react";
import { Avatar } from "./Avatar";
import divider from "./assets/divider.svg";
import icon3 from "./assets/icon-3.svg";
import icon from "./assets/icon.svg";
import heroImage from "./assets/hero-image.png";
import image3 from "./assets/image-3.png";
import image4 from "./assets/image-4.png";
import image5 from "./assets/image-5.png";
import image from "./assets/image.png";
import "./style.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="sticky-header">
        <div className="text-wrapper-10">LogicPros</div>
        <div className="items-4">
          <div className="text-wrapper-8">Services</div>
          <div className="text-wrapper-8">Portfolio</div>
          <div className="text-wrapper-8">About</div>
          <button className="button">
            <div className="text-wrapper-9">Get Quote</div>
          </button>
        </div>
      </div>
      <div className="div">
      <div className="hero-image" />
      <div className="copy-4">
        <div className="page-title">
          <div className="text-wrapper-24">Professional Websites That Win Contracts</div>
          <p className="text-wrapper-25">
            Custom web development for contractors who want to dominate their local market. 
            Get more leads, build trust, and convert visitors into paying customers with a website 
            that showcases your expertise and reliability.
          </p>
        </div>
        <button className="button">
          <div className="text-wrapper-9">Start Your Project</div>
        </button>
      </div>
      <div className="text-wrapper-11">Our Specialized Services</div>
      <div className="frame-2">
        <div className="card">
          <div className="image" />
          <div className="copy">
            <div className="text-wrapper-12">Lead Generation Websites</div>
            <p className="p">
              Mobile-responsive websites designed to capture leads and convert visitors 
              into qualified prospects. Includes contact forms, quote requests, and local SEO optimization.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image-2" />
          <div className="copy">
            <div className="text-wrapper-12">E-Commerce Solutions</div>
            <p className="p">
              Custom online stores for contractors selling tools, equipment, or materials. 
              Secure payment processing, inventory management, and customer portals.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="image-3" />
          <div className="copy">
            <div className="text-wrapper-12">Project Management Portals</div>
            <p className="p">
              Client portals for project tracking, document sharing, progress updates, 
              and communication. Keep clients informed and streamline your workflow.
            </p>
          </div>
        </div>
      </div>
      <div className="text-wrapper-18">Why Contractors Choose LogicPros</div>
      <div className="text">
        <div className="text-2">
          <div className="text-wrapper-19">Industry Expertise</div>
          <p className="text-wrapper-20">
            We understand contractor workflows, bidding processes, and client relationships. 
            Your website will speak directly to potential customers in your industry.
          </p>
        </div>
        <div className="text-2">
          <div className="text-wrapper-19">Local SEO Mastery</div>
          <p className="text-wrapper-20">
            Dominate local search results in your service area. We optimize for 
            "contractor near me" searches and Google My Business integration.
          </p>
        </div>
        <div className="text-2">
          <div className="text-wrapper-12">Fast Turnaround</div>
          <p className="p">
            Get your professional website launched in 2-3 weeks, not months. 
            We know contractors need results quickly to stay competitive.
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="button">
          <div className="text-wrapper-9">Get Free Quote</div>
        </button>
        <button className="button-2">
          <div className="text-wrapper-22">View Portfolio</div>
        </button>
      </div>
      <div className="text-wrapper-13">Recent Success Stories</div>
      <div className="cards-2">
        <div className="card-2">
          <div className="image-5" />
          <div className="copy-2">
            <div className="text-wrapper-14">ABC Roofing Solutions</div>
            <p className="text-wrapper-15">
              Increased online leads by 350% in 6 months with a mobile-first design 
              and local SEO optimization. Now ranking #1 for "roofing contractor [city]".
            </p>
          </div>
        </div>
        <div className="card-2">
          <div className="image-6" />
          <div className="copy-3">
            <div className="text-wrapper-16">Elite Landscaping Co.</div>
            <p className="text-wrapper-17">
              Custom project management portal reduced client communication time by 60% 
              and improved customer satisfaction scores to 98%.
            </p>
          </div>
        </div>
      </div>
      <div className="text-wrapper">What Our Contractor Clients Say</div>
      <div className="cards">
        <div className="card-testimonial">
          <p className="text-wrapper-2">
            &quot;LogicPros built us a website that actually gets results. We've tripled our online leads and the project management portal keeps our clients happy. Best investment we've made for our business.&quot;
          </p>
          <div className="avatar-2">
            <Avatar avatarVariant="default" className="avatar-instance" />
            <div className="frame">
              <div className="text-wrapper-3">Mike Rodriguez</div>
              <div className="text-wrapper-4">Owner, Rodriguez Construction</div>
            </div>
          </div>
        </div>
        <div className="card-testimonial">
          <p className="text-wrapper-2">
            &quot;The e-commerce site LogicPros built for our supply business increased our online sales by 400%. The inventory management system saves us hours every week.&quot;
          </p>
          <div className="avatar-2">
            <div className="avatar-placeholder" style={{width: '40px', height: '40px', backgroundColor: '#e0e0e0', borderRadius: '50%'}} />
            <div className="frame">
              <div className="text-wrapper-3">Sarah Chen</div>
              <div className="text-wrapper-4">Manager, ProTools Supply</div>
            </div>
          </div>
        </div>
        <div className="card-testimonial">
          <div className="text-wrapper-2">
            &quot;Professional, fast, and they understand the construction industry. Our new website looks amazing and we're getting calls from customers who found us online. Highly recommended!&quot;
          </div>
          <div className="avatar-2">
            <div className="avatar-placeholder" style={{width: '40px', height: '40px', backgroundColor: '#e0e0e0', borderRadius: '50%'}} />
            <div className="frame">
              <div className="text-wrapper-3">Tom Anderson</div>
              <div className="text-wrapper-4">CEO, Anderson Plumbing</div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-footer">
        <div className="items">
          <div className="text-wrapper-5">Services</div>
          <div className="text-wrapper-6">Lead Generation Sites</div>
          <div className="text-wrapper-6">E-Commerce Solutions</div>
          <div className="text-wrapper-6">Project Management</div>
        </div>
        <div className="items-2">
          <div className="text-wrapper-5">Company</div>
          <div className="text-wrapper-6">About Us</div>
          <div className="text-wrapper-6">Portfolio</div>
          <div className="text-wrapper-6">Case Studies</div>
        </div>
        <div className="items-3">
          <div className="text-wrapper-5">Resources</div>
          <div className="text-wrapper-6">SEO Guide</div>
          <div className="text-wrapper-6">Web Trends</div>
          <div className="text-wrapper-6">Contact</div>
        </div>
        <div className="text-wrapper-7">LogicPros Web Development</div>
        <div className="social-icons">
          <div className="buttons-icon">
            <div className="icon">
              <img className="icon-2" alt="Icon" src={icon} />
            </div>
          </div>
          <div className="buttons-icon">
            <div className="icon">
              <img className="icon-3" alt="Icon" src={icon3} />
            </div>
          </div>
          <div className="buttons-icon">
            <div className="icon">
              <img className="icon-4" alt="Icon" src={icon} />
            </div>
          </div>
          <div className="buttons-icon">
            <div className="icon">
              <img className="icon-2" alt="Icon" src={icon} />
            </div>
          </div>
        </div>
        <img className="divider" alt="Divider" src={divider} />
        <div className="buttons-2">
          <button className="div-wrapper">
            <div className="text-wrapper-21">Get Started Today</div>
          </button>
          <button className="button-2">
            <div className="text-wrapper-22">Schedule Consultation</div>
          </button>
        </div>
        <div className="text-wrapper-23">Ready to Grow Your Business?</div>
      </div>
      </div>
    </div>
  );
};