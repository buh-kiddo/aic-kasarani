import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">A.I.C Kasarani</h3>
            <p className="text-sm text-secondary-foreground/80">Just as the Shepherd leaves the ninety-nine to find the one, we are called to bring the lost back to Christ and prepare for His coming. <br /><i>~Luke 15:4</i> </p>
            <div className="flex space-x-4 mt-4">
              <SocialLink href="https://web.facebook.com/Aickasaraniofficial/?_rdc=1&_rdr#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
              <SocialLink href="https://www.instagram.com/aickasarani/?hl=en" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Youtube size={20} />} label="YouTube" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 ml-12">Quick Links</h3>
            <ul className="space-y-2 ml-14">
              <FooterLink href="/about" label="About Us" />
              <FooterLink href="/ministries" label="Ministries" />
              <FooterLink href="/events" label="Events" />
              <FooterLink href="/sermons" label="Sermons" />
              <FooterLink href="/contact" label="Contact" />
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Service Times</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Morning Glory: 06:30 AM - 08:00 AM</li>
              <li>English Service: 08:0 AM - 10:00 AM</li>
              <li>Swahili Service: 10:00 AM - 01:00 PM</li>
              <li>Sunday School: 11:00 AM - 01:00 PM</li>
              <li>Youth Fellowship: 01:00 PM - 02:00 PM</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Icipe Road Opp. KISE, Kasarani, Nairobi
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +254 722 265 649
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                aickasarani@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} A.I.C Kasarani | All rights reserved | <a href="https://saeldigitalagency.co.ke/">By Sael Digital Agency</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-secondary-foreground hover:text-primary transition-colors duration-300"
    aria-label={label}
  >
    {icon}
  </a>
)

const FooterLink = ({ href, label }) => (
  <li>
    <Link
      href={href}
      className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-300"
    >
      {label}
    </Link>
  </li>
)

export default Footer

