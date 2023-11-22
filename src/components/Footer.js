import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const footerData = {
    success: "true",
    data: {
      description: "<p>Since its establishment in 2004, Brand has been leading the global market in digital dentistry by proposing a new standard for dental imaging solutions through state-of-the-art technology. </p><p>Brand will continuously grow to provide better products and services through outstanding technology and experience.</p>",
      sociallinks: [
        {
          text: 'Instagram',
          url: 'https://www.instagram.com/branddentistry/',
        },
        {
          text: 'Twitter',
          url: 'https://twitter.com/branddentistry',
        },
        {
          text: 'Youtube',
          url: 'https://www.youtube.com/channel/UCZw9T5t2ZG9J6x0gX7JrVjQ',
        },
        {
          text: 'Linkedin',
          url: 'https://www.linkedin.com/company/brand-dentistry/',
        }
      ],
      linkdata: [
        {
          title: "Who We Are",
          links: [
            {
              text: 'Company Overview',
              url: '/',
            },
            {
              text: 'Philosophy & Culture',
              url: '/',
            },
            {
              text: 'Our People & Leadership',
              url: '/',
            },
            {
              text: 'Global Presence',
              url: '/',
            },
            {
              text: 'Find A Distributor',
              url: '/',
            },
            {
              text: 'Investor Relations',
              url: '/',
            },
            {
              text: 'Career Opportunities',
              url: '/',
            },
            {
              text: 'General Inquiry',
              url: '/',
            },
          ]
        },
        {
          title: "Our Dental Solutions",
          links: [
            {
              text: 'BrandFace',
              url: '/',
            },
            {
              text: 'BrandPremiere',
              url: '/',
            },
            {
              text: 'BrandScan Studio',
              url: '/',
            },
            {
              text: 'BrandScan a+',
              url: '/',
            },
            {
              text: 'BrandScan m+',
              url: '/',
            },
            {
              text: 'RIO Scan',
              url: '/',
            },
            {
              text: 'RIO Sensor',
              url: '/',
            },
            {
              text: 'BrandiOS 2',
              url: '/',
            },
            {
              text: 'Branddent Microsan',
              url: '/',
            },
            {
              text: 'Branddent Designer',
              url: '/',
            },
            {
              text: 'Brand Mill',
              url: '/',
            },
            {
              text: 'Branddent Studio',
              url: '/',
            },
            {
              text: 'Brand Smiler',
              url: '/',
            },
          ]
        },
        {
          title: "Why Brand Is Different",
          links: [
            {
              text: 'Face Driven Dentistry',
              url: '/',
            },
            {
              text: 'Smile Nation',
              url: '/',
            },
            {
              text: 'Clinical Cases',
              url: '/',
            },
            {
              text: 'Industry Insights',
              url: '/',
            },
            {
              text: 'Our Dental Solutions',
              url: '/',
            },
            {
              text: 'Our Commitments',
              url: '/',
            },
            {
              text: 'Ethical Management',
              url: '/',
            },
            {
              text: 'Research & Development',
              url: '/',
            },
            {
              text: 'Product Quality & Safety',
              url: '/',
            },
          ]
        }
      ],
      copyright: '&copy; Brand Co., Ltd. 2023, All rights reserved.',
      footerlinks: [
        {
          text: 'Terms & Conditions',
          url: '/',
        },
        {
          text: 'Privacy Policy',
          url: '/',
        },
      ],
    },
  };

  return (
    <footer className="flex flex-col bg-pale-yellow text-tertiary py-10 px-5 md:px-10 text-[15px] leading-[1.8] ">
      <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row gap-10 md:gap-28">
        <div className="col-1 max-w-sm">
          <Link href={"/"}>
            <Image
              src={"/Logo_dark.svg"}
              width={"100"}
              height={"40"}
              alt="logo"
            />
          </Link>

          <div className="max-w-md mt-10 mb-12">
            <div dangerouslySetInnerHTML={{ __html: footerData.data.description }}></div>
          </div>
          <div className="flex flex-row gap-4 social-icons">
            {
              footerData.data.sociallinks.map((item, index) => {
                return (
                  <Link className="flex justify-center hover:bg-primary hover:translate-y-[-5px] transition-transform ease-linear items-center rounded-full bg-tertiary text-white text-base w-8 h-8" href={item.url} key={index}>
                    <i className={`icon-${item.text.toLowerCase()} ${(item.text.toLowerCase() == 'linkedin') ? 'text-xs' : ''}`}></i>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div className="col-2 flex flex-col sm:flex-row gap-8 md:gap-20">
          {
            footerData.data.linkdata.map((item, index) => {
              return (
                <div className="col" key={index}>
                  <h6>{item.title}</h6>
                  <ul>
                    {
                      item.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link href={link.url}>{link.text}</Link>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row justify-between md:gap-28 mt-9 md:mt-[160px] mb-5">
        <div className="copyright">
          <span dangerouslySetInnerHTML={{ __html: footerData.data.copyright }}></span>
        </div>
        <div className="footer-links flex gap-8">
          {
            footerData.data.footerlinks.map((item, index) => {
              return (
                <Link className="hover:underline" href={item.url} key={index}>{item.text}</Link>
              )
            })
          }
        </div>
      </div>
    </footer>
  );
}
