// @ts-nocheck
import React from 'react';
import { ContactForm } from '@/components/ui/ContactForm';

export const Creeks = () => {
  return (
    <>

      <div
        id="siteWrapper"
        className="clearfix site-wrapper"
      >

        <div id="floatingCart" className="floating-cart hidden">
          <a href="/projects/cart" className="icon icon--stroke icon--fill icon--cart sqs-custom-cart">
            <span className="Cart-inner">




              <svg className="icon icon--cart" width="61" height="49" viewBox="0 0 61 49">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.5 2C0.5 1.17157 1.17157 0.5 2 0.5H13.6362C14.3878 0.5 15.0234 1.05632 15.123 1.80135L16.431 11.5916H59C59.5122 11.5916 59.989 11.8529 60.2645 12.2847C60.54 12.7165 60.5762 13.2591 60.3604 13.7236L50.182 35.632C49.9361 36.1614 49.4054 36.5 48.8217 36.5H18.0453C17.2937 36.5 16.6581 35.9437 16.5585 35.1987L12.3233 3.5H2C1.17157 3.5 0.5 2.82843 0.5 2ZM16.8319 14.5916L19.3582 33.5H47.8646L56.6491 14.5916H16.8319Z" />
                <path d="M18.589 35H49.7083L60 13H16L18.589 35Z" />
                <path d="M21 49C23.2091 49 25 47.2091 25 45C25 42.7909 23.2091 41 21 41C18.7909 41 17 42.7909 17 45C17 47.2091 18.7909 49 21 49Z" />
                <path d="M45 49C47.2091 49 49 47.2091 49 45C49 42.7909 47.2091 41 45 41C42.7909 41 41 42.7909 41 45C41 47.2091 42.7909 49 45 49Z" />
              </svg>

              <div className="legacy-cart icon-cart-quantity">
                <span className="sqs-cart-quantity">0</span>
              </div>
            </span>
          </a>
        </div>















        <header
          data-test="header"
          id="header"

          className="
      
        
      
      header theme-col--primary
    "
          data-section-theme=""
          data-controller="Header"
          data-current-styles="{
                                                                                                                                  &quot;layout&quot;: &quot;navRight&quot;,
                                                                                                                                  &quot;action&quot;: {
                                                                                                                                    &quot;buttonText&quot;: &quot;Get Started&quot;,
                                                                                                                                    &quot;newWindow&quot;: false
                                                                                                                                  },
                                                                                                                                  &quot;showSocial&quot;: false,
                                                                                                                                  &quot;socialOptions&quot;: {
                                                                                                                                    &quot;socialBorderShape&quot;: &quot;none&quot;,
                                                                                                                                    &quot;socialBorderStyle&quot;: &quot;outline&quot;,
                                                                                                                                    &quot;socialBorderThickness&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 1.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
                                                                                                                                  &quot;cartStyle&quot;: &quot;cart&quot;,
                                                                                                                                  &quot;cartText&quot;: &quot;Cart&quot;,
                                                                                                                                  &quot;showEmptyCartState&quot;: true,
                                                                                                                                  &quot;cartOptions&quot;: {
                                                                                                                                    &quot;iconType&quot;: &quot;solid-7&quot;,
                                                                                                                                    &quot;cartBorderShape&quot;: &quot;none&quot;,
                                                                                                                                    &quot;cartBorderStyle&quot;: &quot;outline&quot;,
                                                                                                                                    &quot;cartBorderThickness&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 1.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;showButton&quot;: false,
                                                                                                                                  &quot;showCart&quot;: false,
                                                                                                                                  &quot;showAccountLogin&quot;: false,
                                                                                                                                  &quot;headerStyle&quot;: &quot;theme&quot;,
                                                                                                                                  &quot;languagePicker&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;iconEnabled&quot;: false,
                                                                                                                                    &quot;iconType&quot;: &quot;globe&quot;,
                                                                                                                                    &quot;flagShape&quot;: &quot;shiny&quot;,
                                                                                                                                    &quot;languageFlags&quot;: [ ]
                                                                                                                                  },
                                                                                                                                  &quot;iconOptions&quot;: {
                                                                                                                                    &quot;desktopDropdownIconOptions&quot;: {
                                                                                                                                      &quot;size&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      },
                                                                                                                                      &quot;iconSpacing&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 0.35
                                                                                                                                      },
                                                                                                                                      &quot;strokeWidth&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      },
                                                                                                                                      &quot;endcapType&quot;: &quot;square&quot;,
                                                                                                                                      &quot;folderDropdownIcon&quot;: &quot;none&quot;,
                                                                                                                                      &quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
                                                                                                                                    },
                                                                                                                                    &quot;mobileDropdownIconOptions&quot;: {
                                                                                                                                      &quot;size&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      },
                                                                                                                                      &quot;iconSpacing&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 0.15
                                                                                                                                      },
                                                                                                                                      &quot;strokeWidth&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 0.5
                                                                                                                                      },
                                                                                                                                      &quot;endcapType&quot;: &quot;square&quot;,
                                                                                                                                      &quot;folderDropdownIcon&quot;: &quot;openArrowHead&quot;,
                                                                                                                                      &quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;mobileOptions&quot;: {
                                                                                                                                    &quot;layout&quot;: &quot;logoLeftNavRight&quot;,
                                                                                                                                    &quot;menuIconOptions&quot;: {
                                                                                                                                      &quot;style&quot;: &quot;doubleLineHamburger&quot;,
                                                                                                                                      &quot;thickness&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;solidOptions&quot;: {
                                                                                                                                    &quot;headerOpacity&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;%&quot;,
                                                                                                                                      &quot;value&quot;: 100.0
                                                                                                                                    },
                                                                                                                                    &quot;blurBackground&quot;: {
                                                                                                                                      &quot;enabled&quot;: false,
                                                                                                                                      &quot;blurRadius&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 12.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;backgroundColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;white&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;navigationColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;black&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;gradientOptions&quot;: {
                                                                                                                                    &quot;gradientType&quot;: &quot;faded&quot;,
                                                                                                                                    &quot;headerOpacity&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;%&quot;,
                                                                                                                                      &quot;value&quot;: 90.0
                                                                                                                                    },
                                                                                                                                    &quot;blurBackground&quot;: {
                                                                                                                                      &quot;enabled&quot;: false,
                                                                                                                                      &quot;blurRadius&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 12.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;backgroundColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;white&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;navigationColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;black&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;dropShadowOptions&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;blur&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 12.0
                                                                                                                                    },
                                                                                                                                    &quot;spread&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 0.0
                                                                                                                                    },
                                                                                                                                    &quot;distance&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 12.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;borderOptions&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;position&quot;: &quot;bottom&quot;,
                                                                                                                                    &quot;thickness&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 4.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;showPromotedElement&quot;: false,
                                                                                                                                  &quot;buttonVariant&quot;: &quot;primary&quot;,
                                                                                                                                  &quot;blurBackground&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;blurRadius&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 12.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;headerOpacity&quot;: {
                                                                                                                                    &quot;unit&quot;: &quot;%&quot;,
                                                                                                                                    &quot;value&quot;: 100.0
                                                                                                                                  }
                                                                                                                                }"
          data-section-id="header"
          data-header-style={{} as any}
          data-language-picker="{
                                                                                                                                  &quot;enabled&quot;: false,
                                                                                                                                  &quot;iconEnabled&quot;: false,
                                                                                                                                  &quot;iconType&quot;: &quot;globe&quot;,
                                                                                                                                  &quot;flagShape&quot;: &quot;shiny&quot;,
                                                                                                                                  &quot;languageFlags&quot;: [ ]
                                                                                                                                }"


          data-first-focusable-element
          tabIndex={-1}
          style={{ "--solidHeaderBackgroundColor": "hsla(var(--white-hsl), 1)", "--solidHeaderNavigationColor": "hsla(var(--black-hsl), 1)", "--gradientHeaderBackgroundColor": "hsla(var(--white-hsl), 1)", "--gradientHeaderNavigationColor": "hsla(var(--black-hsl), 1)" } as any}
          className="header-theme-light" style={{ backgroundColor: "#FFFFFF", color: "#000000" } as any}>
          <svg style={{ display: "none" } as any} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <symbol id="circle" >
              <path d="M11.5 17C14.5376 17 17 14.5376 17 11.5C17 8.46243 14.5376 6 11.5 6C8.46243 6 6 8.46243 6 11.5C6 14.5376 8.46243 17 11.5 17Z" fill="none" />
            </symbol>

            <symbol id="circleFilled" >
              <path d="M11.5 17C14.5376 17 17 14.5376 17 11.5C17 8.46243 14.5376 6 11.5 6C8.46243 6 6 8.46243 6 11.5C6 14.5376 8.46243 17 11.5 17Z" />
            </symbol>

            <symbol id="dash" >
              <path d="M11 11H19H3" />
            </symbol>

            <symbol id="squareFilled" >
              <rect x="6" y="6" width="11" height="11" />
            </symbol>

            <symbol id="square" >
              <rect x="7" y="7" width="9" height="9" fill="none" stroke="inherit" />
            </symbol>

            <symbol id="plus" >
              <path d="M11 3V19" />
              <path d="M19 11L3 11" />
            </symbol>

            <symbol id="closedArrow" >
              <path d="M11 11V2M11 18.1797L17 11.1477L5 11.1477L11 18.1797Z" fill="none" />
            </symbol>

            <symbol id="closedArrowFilled" >
              <path d="M11 11L11 2" stroke="inherit" fill="none" />
              <path fillRule="evenodd" clipRule="evenodd" d="M2.74695 9.38428L19.038 9.38428L10.8925 19.0846L2.74695 9.38428Z" strokeWidth="1" />
            </symbol>

            <symbol id="closedArrowHead" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/symbol">
              <path d="M18 7L11 15L4 7L18 7Z" fill="none" stroke="inherit" />
            </symbol>


            <symbol id="closedArrowHeadFilled" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/symbol">
              <path d="M18.875 6.5L11 15.5L3.125 6.5L18.875 6.5Z" />
            </symbol>

            <symbol id="openArrow" >
              <path d="M11 18.3591L11 3" stroke="inherit" fill="none" />
              <path d="M18 11.5L11 18.5L4 11.5" stroke="inherit" fill="none" />
            </symbol>

            <symbol id="openArrowHead" >
              <path d="M18 7L11 14L4 7" fill="none" />
            </symbol>

            <symbol id="pinchedArrow" >
              <path d="M11 17.3591L11 2" fill="none" />
              <path d="M2 11C5.85455 12.2308 8.81818 14.9038 11 18C13.1818 14.8269 16.1455 12.1538 20 11" fill="none" />
            </symbol>

            <symbol id="pinchedArrowFilled" >
              <path d="M11.05 10.4894C7.04096 8.73759 1.05005 8 1.05005 8C6.20459 11.3191 9.41368 14.1773 11.05 21C12.6864 14.0851 15.8955 11.227 21.05 8C21.05 8 15.0591 8.73759 11.05 10.4894Z" strokeWidth="1" />
              <path d="M11 11L11 1" fill="none" />
            </symbol>

            <symbol id="pinchedArrowHead" >
              <path d="M2 7.24091C5.85455 8.40454 8.81818 10.9318 11 13.8591C13.1818 10.8591 16.1455 8.33181 20 7.24091" fill="none" />
            </symbol>

            <symbol id="pinchedArrowHeadFilled" >
              <path d="M11.05 7.1591C7.04096 5.60456 1.05005 4.95001 1.05005 4.95001C6.20459 7.89547 9.41368 10.4318 11.05 16.4864C12.6864 10.35 15.8955 7.81365 21.05 4.95001C21.05 4.95001 15.0591 5.60456 11.05 7.1591Z" />
            </symbol>

          </svg>

          <div className="sqs-announcement-bar-dropzone"></div>

          <div className="header-announcement-bar-wrapper">





            <style dangerouslySetInnerHTML={{
              __html: `
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
        .header-blur-background {
            
            
        }
    }
` }} />
            <div
              className="header-border"
              data-header-style={{} as any}
              data-header-border="false"
              data-test="header-border"
              style={{} as any}
            ></div>
            <div
              className="header-dropshadow"
              data-header-style={{} as any}
              data-header-dropshadow="false"
              data-test="header-dropshadow"
              style={{} as any}
            ></div>



            <div className='header-inner container--fluid
        
        
        
         header-mobile-layout-logo-left-nav-right
        
        
        
        
        
        
         header-layout-nav-right
        
        
        
        
        
        
        
        
        '
              data-test="header-inner"
            >

              <div className="header-background theme-bg--primary"></div>

              <div className="header-display-desktop" data-content-field="site-title">


















                <div className="header-title-nav-wrapper">








                  <div
                    className="
                      header-title
                      
                    "
                    data-animation-role="header-element"
                  >

                    <div className="header-title-logo">
                      <a href="/" data-animation-role="header-element">

                        <img src="/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1784802349155-BSSTHU00UQAFMZRNZ8JE/elsewhere26f7.jpg?format=1500w" alt="elsewhere" style={{ display: "block" } as any} loading="eager" decoding="async" />

                      </a>
                    </div>



                  </div>




                  <div className="header-nav">
                    <div className="header-nav-wrapper">
                      <nav className="header-nav-list">




                        <div className="header-nav-item header-nav-item--collection header-nav-item--homepage">
                          <a
                            href="/"
                            data-animation-role="header-element"

                          >
                            The One Alex
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection header-nav-item--active">
                          <a
                            href="/projects/creeks"
                            data-animation-role="header-element"

                            aria-current="page"

                          >
                            creeks
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/projects/ajaza"
                            data-animation-role="header-element"

                          >
                            Ajaza
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/about"
                            data-animation-role="header-element"

                          >
                            About
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/contact"
                            data-animation-role="header-element"

                          >
                            Contact
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/videos"
                            data-animation-role="header-element"

                          >
                            Videos
                          </a>
                        </div>






                      </nav>
                    </div>
                  </div>


                </div>



                <div className="header-actions header-actions--right">











                  <div className="showOnMobile">

                  </div>


                  <div className="showOnDesktop">

                  </div>


                </div>




                <style dangerouslySetInnerHTML={{
                  __html: `
  .top-bun, 
  .patty, 
  .bottom-bun {
    height: 1px;
  }
` }} />


                <div className="header-burger

  menu-overlay-does-not-have-visible-non-navigation-items


  
  no-actions
  
" data-animation-role="header-element">
                  <button className="header-burger-btn burger" data-test="header-burger">
                    <span hidden className="js-header-burger-open-title visually-hidden">Open Menu</span>
                    <span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
                    <div className="burger-box">
                      <div className="burger-inner header-menu-icon-doubleLineHamburger">
                        <div className="top-bun"></div>
                        <div className="patty"></div>
                        <div className="bottom-bun"></div>
                      </div>
                    </div>
                  </button>
                </div>



              </div>
              <div className="header-display-mobile" data-content-field="site-title">







                <div className="header-title-nav-wrapper">








                  <div
                    className="
                      header-title
                      
                    "
                    data-animation-role="header-element"
                  >

                    <div className="header-title-logo">
                      <a href="/" data-animation-role="header-element">

                        <img src="/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1784802349155-BSSTHU00UQAFMZRNZ8JE/elsewhere26f7.jpg?format=1500w" alt="elsewhere" style={{ display: "block" } as any} loading="eager" decoding="async" />

                      </a>
                    </div>



                  </div>




                  <div className="header-nav">
                    <div className="header-nav-wrapper">
                      <nav className="header-nav-list">




                        <div className="header-nav-item header-nav-item--collection header-nav-item--homepage">
                          <a
                            href="/"
                            data-animation-role="header-element"

                          >
                            The One Alex
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection header-nav-item--active">
                          <a
                            href="/projects/creeks"
                            data-animation-role="header-element"

                            aria-current="page"

                          >
                            creeks
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/projects/ajaza"
                            data-animation-role="header-element"

                          >
                            Ajaza
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/about"
                            data-animation-role="header-element"

                          >
                            About
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/contact"
                            data-animation-role="header-element"

                          >
                            Contact
                          </a>
                        </div>






                        <div className="header-nav-item header-nav-item--collection">
                          <a
                            href="/videos"
                            data-animation-role="header-element"

                          >
                            Videos
                          </a>
                        </div>






                      </nav>
                    </div>
                  </div>


                </div>



                <div className="header-actions header-actions--right">











                  <div className="showOnMobile">

                  </div>


                  <div className="showOnDesktop">

                  </div>


                </div>




                <style dangerouslySetInnerHTML={{
                  __html: `
  .top-bun, 
  .patty, 
  .bottom-bun {
    height: 1px;
  }
` }} />


                <div className="header-burger

  menu-overlay-does-not-have-visible-non-navigation-items


  
  no-actions
  
" data-animation-role="header-element">
                  <button className="header-burger-btn burger" data-test="header-burger">
                    <span hidden className="js-header-burger-open-title visually-hidden">Open Menu</span>
                    <span hidden className="js-header-burger-close-title visually-hidden">Close Menu</span>
                    <div className="burger-box">
                      <div className="burger-inner header-menu-icon-doubleLineHamburger">
                        <div className="top-bun"></div>
                        <div className="patty"></div>
                        <div className="bottom-bun"></div>
                      </div>
                    </div>
                  </button>
                </div>






              </div>
            </div>
          </div>

          <div className="header-menu header-menu--folder-list
      
      
      
      
      
      "
            data-section-theme=""
            data-current-styles="{
                                                                                                                                  &quot;layout&quot;: &quot;navRight&quot;,
                                                                                                                                  &quot;action&quot;: {
                                                                                                                                    &quot;buttonText&quot;: &quot;Get Started&quot;,
                                                                                                                                    &quot;newWindow&quot;: false
                                                                                                                                  },
                                                                                                                                  &quot;showSocial&quot;: false,
                                                                                                                                  &quot;socialOptions&quot;: {
                                                                                                                                    &quot;socialBorderShape&quot;: &quot;none&quot;,
                                                                                                                                    &quot;socialBorderStyle&quot;: &quot;outline&quot;,
                                                                                                                                    &quot;socialBorderThickness&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 1.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;menuOverlayAnimation&quot;: &quot;fade&quot;,
                                                                                                                                  &quot;cartStyle&quot;: &quot;cart&quot;,
                                                                                                                                  &quot;cartText&quot;: &quot;Cart&quot;,
                                                                                                                                  &quot;showEmptyCartState&quot;: true,
                                                                                                                                  &quot;cartOptions&quot;: {
                                                                                                                                    &quot;iconType&quot;: &quot;solid-7&quot;,
                                                                                                                                    &quot;cartBorderShape&quot;: &quot;none&quot;,
                                                                                                                                    &quot;cartBorderStyle&quot;: &quot;outline&quot;,
                                                                                                                                    &quot;cartBorderThickness&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 1.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;showButton&quot;: false,
                                                                                                                                  &quot;showCart&quot;: false,
                                                                                                                                  &quot;showAccountLogin&quot;: false,
                                                                                                                                  &quot;headerStyle&quot;: &quot;theme&quot;,
                                                                                                                                  &quot;languagePicker&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;iconEnabled&quot;: false,
                                                                                                                                    &quot;iconType&quot;: &quot;globe&quot;,
                                                                                                                                    &quot;flagShape&quot;: &quot;shiny&quot;,
                                                                                                                                    &quot;languageFlags&quot;: [ ]
                                                                                                                                  },
                                                                                                                                  &quot;iconOptions&quot;: {
                                                                                                                                    &quot;desktopDropdownIconOptions&quot;: {
                                                                                                                                      &quot;size&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      },
                                                                                                                                      &quot;iconSpacing&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 0.35
                                                                                                                                      },
                                                                                                                                      &quot;strokeWidth&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      },
                                                                                                                                      &quot;endcapType&quot;: &quot;square&quot;,
                                                                                                                                      &quot;folderDropdownIcon&quot;: &quot;none&quot;,
                                                                                                                                      &quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
                                                                                                                                    },
                                                                                                                                    &quot;mobileDropdownIconOptions&quot;: {
                                                                                                                                      &quot;size&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      },
                                                                                                                                      &quot;iconSpacing&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;em&quot;,
                                                                                                                                        &quot;value&quot;: 0.15
                                                                                                                                      },
                                                                                                                                      &quot;strokeWidth&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 0.5
                                                                                                                                      },
                                                                                                                                      &quot;endcapType&quot;: &quot;square&quot;,
                                                                                                                                      &quot;folderDropdownIcon&quot;: &quot;openArrowHead&quot;,
                                                                                                                                      &quot;languagePickerIcon&quot;: &quot;openArrowHead&quot;
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;mobileOptions&quot;: {
                                                                                                                                    &quot;layout&quot;: &quot;logoLeftNavRight&quot;,
                                                                                                                                    &quot;menuIconOptions&quot;: {
                                                                                                                                      &quot;style&quot;: &quot;doubleLineHamburger&quot;,
                                                                                                                                      &quot;thickness&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;solidOptions&quot;: {
                                                                                                                                    &quot;headerOpacity&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;%&quot;,
                                                                                                                                      &quot;value&quot;: 100.0
                                                                                                                                    },
                                                                                                                                    &quot;blurBackground&quot;: {
                                                                                                                                      &quot;enabled&quot;: false,
                                                                                                                                      &quot;blurRadius&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 12.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;backgroundColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;white&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;navigationColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;black&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;gradientOptions&quot;: {
                                                                                                                                    &quot;gradientType&quot;: &quot;faded&quot;,
                                                                                                                                    &quot;headerOpacity&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;%&quot;,
                                                                                                                                      &quot;value&quot;: 90.0
                                                                                                                                    },
                                                                                                                                    &quot;blurBackground&quot;: {
                                                                                                                                      &quot;enabled&quot;: false,
                                                                                                                                      &quot;blurRadius&quot;: {
                                                                                                                                        &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                        &quot;value&quot;: 12.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;backgroundColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;white&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    },
                                                                                                                                    &quot;navigationColor&quot;: {
                                                                                                                                      &quot;type&quot;: &quot;SITE_PALETTE_COLOR&quot;,
                                                                                                                                      &quot;sitePaletteColor&quot;: {
                                                                                                                                        &quot;colorName&quot;: &quot;black&quot;,
                                                                                                                                        &quot;alphaModifier&quot;: 1.0
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;dropShadowOptions&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;blur&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 12.0
                                                                                                                                    },
                                                                                                                                    &quot;spread&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 0.0
                                                                                                                                    },
                                                                                                                                    &quot;distance&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 12.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;borderOptions&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;position&quot;: &quot;bottom&quot;,
                                                                                                                                    &quot;thickness&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 4.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;showPromotedElement&quot;: false,
                                                                                                                                  &quot;buttonVariant&quot;: &quot;primary&quot;,
                                                                                                                                  &quot;blurBackground&quot;: {
                                                                                                                                    &quot;enabled&quot;: false,
                                                                                                                                    &quot;blurRadius&quot;: {
                                                                                                                                      &quot;unit&quot;: &quot;px&quot;,
                                                                                                                                      &quot;value&quot;: 12.0
                                                                                                                                    }
                                                                                                                                  },
                                                                                                                                  &quot;headerOpacity&quot;: {
                                                                                                                                    &quot;unit&quot;: &quot;%&quot;,
                                                                                                                                    &quot;value&quot;: 100.0
                                                                                                                                  }
                                                                                                                                }"
            data-section-id="overlay-nav"
            data-show-account-login="false"
            data-test="header-menu">
            <div className="header-menu-bg theme-bg--primary"></div>
            <div className="header-menu-nav">
              <nav className="header-menu-nav-list">
                <div data-folder="root" className="header-menu-nav-folder">
                  <div className="header-menu-nav-folder-content">

                    <div className="header-menu-nav-wrapper">





                      <div className="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--homepage">
                        <a
                          href="/"

                        >
                          <div className="header-menu-nav-item-content">
                            The One Alex
                          </div>
                        </a>
                      </div>







                      <div className="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active">
                        <a
                          href="/projects/creeks"

                          aria-current="page"

                        >
                          <div className="header-menu-nav-item-content">
                            creeks
                          </div>
                        </a>
                      </div>







                      <div className="container header-menu-nav-item header-menu-nav-item--collection">
                        <a
                          href="/projects/ajaza"

                        >
                          <div className="header-menu-nav-item-content">
                            Ajaza
                          </div>
                        </a>
                      </div>







                      <div className="container header-menu-nav-item header-menu-nav-item--collection">
                        <a
                          href="/about"

                        >
                          <div className="header-menu-nav-item-content">
                            About
                          </div>
                        </a>
                      </div>







                      <div className="container header-menu-nav-item header-menu-nav-item--collection">
                        <a
                          href="/contact"

                        >
                          <div className="header-menu-nav-item-content">
                            Contact
                          </div>
                        </a>
                      </div>







                      <div className="container header-menu-nav-item header-menu-nav-item--collection">
                        <a
                          href="/videos"

                        >
                          <div className="header-menu-nav-item-content">
                            Videos
                          </div>
                        </a>
                      </div>





                    </div>




                  </div>



                </div>
              </nav>
            </div>
          </div>
        </header>




        <main id="page" className="container" role="main">


          <article
            className="page-regions"
            id="page-regions"
            data-collection-id="6a6216e106233329afceed98"
            data-item-id=""
            data-regions-source="collection"
          >






            <section className="region" data-region-id="6a6216e106233329afceed97">




















              <section
                data-test="page-section"

                data-section-theme="black"
                className='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--large
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
       has-background
    
    
    black'

                data-section-id="6a6216e106233329afceed9c"

                data-controller="SectionWrapperController"
                data-current-styles="{
                                                                                                                                  &quot;backgroundImage&quot;: {
                                                                                                                                    &quot;id&quot;: &quot;6a621fcc5288dc00b96c4cc2&quot;,
                                                                                                                                    &quot;recordType&quot;: 2,
                                                                                                                                    &quot;addedOn&quot;: 1784815564002,
                                                                                                                                    &quot;updatedOn&quot;: 1784815564065,
                                                                                                                                    &quot;workflowState&quot;: 1,
                                                                                                                                    &quot;publishOn&quot;: 1784815564002,
                                                                                                                                    &quot;authorId&quot;: &quot;66ec2290a4e4cd452f2a76f1&quot;,
                                                                                                                                    &quot;systemDataId&quot;: &quot;298d6404-8850-48f1-9ee6-2ac046594e46&quot;,
                                                                                                                                    &quot;systemDataVariants&quot;: &quot;1536x1024&quot;,
                                                                                                                                    &quot;systemDataSourceType&quot;: &quot;PNG&quot;,
                                                                                                                                    &quot;filename&quot;: &quot;Creeks.png&quot;,
                                                                                                                                    &quot;mediaFocalPoint&quot;: {
                                                                                                                                      &quot;x&quot;: 0.5,
                                                                                                                                      &quot;y&quot;: 0.5,
                                                                                                                                      &quot;source&quot;: 3
                                                                                                                                    },
                                                                                                                                    &quot;colorData&quot;: {
                                                                                                                                      &quot;topLeftAverage&quot;: &quot;171d18&quot;,
                                                                                                                                      &quot;topRightAverage&quot;: &quot;466592&quot;,
                                                                                                                                      &quot;bottomLeftAverage&quot;: &quot;373022&quot;,
                                                                                                                                      &quot;bottomRightAverage&quot;: &quot;0d100e&quot;,
                                                                                                                                      &quot;centerAverage&quot;: &quot;5c5a68&quot;,
                                                                                                                                      &quot;suggestedBgColor&quot;: &quot;74777f&quot;
                                                                                                                                    },
                                                                                                                                    &quot;urlId&quot;: &quot;t85mevzzlmx27wjjp9u40niw9mxdhb&quot;,
                                                                                                                                    &quot;title&quot;: &quot;&quot;,
                                                                                                                                    &quot;body&quot;: null,
                                                                                                                                    &quot;likeCount&quot;: 0,
                                                                                                                                    &quot;commentCount&quot;: 0,
                                                                                                                                    &quot;publicCommentCount&quot;: 0,
                                                                                                                                    &quot;commentState&quot;: 2,
                                                                                                                                    &quot;unsaved&quot;: false,
                                                                                                                                    &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/298d6404-8850-48f1-9ee6-2ac046594e46/Creeks.png&quot;,
                                                                                                                                    &quot;contentType&quot;: &quot;image/png&quot;,
                                                                                                                                    &quot;items&quot;: [ ],
                                                                                                                                    &quot;pushedServices&quot;: { },
                                                                                                                                    &quot;pendingPushedServices&quot;: { },
                                                                                                                                    &quot;originalSize&quot;: &quot;1536x1024&quot;,
                                                                                                                                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                                                                                                                                  },
                                                                                                                                  &quot;imageOverlayOpacity&quot;: 0.6,
                                                                                                                                  &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                                                                                                                                  &quot;sectionHeight&quot;: &quot;section-height--large&quot;,
                                                                                                                                  &quot;customSectionHeight&quot;: 1,
                                                                                                                                  &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                                                                                                                                  &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                                                                                                                                  &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                                                                                                                                  &quot;customContentWidth&quot;: 50,
                                                                                                                                  &quot;sectionTheme&quot;: &quot;black&quot;,
                                                                                                                                  &quot;sectionAnimation&quot;: &quot;none&quot;,
                                                                                                                                  &quot;backgroundMode&quot;: &quot;image&quot;
                                                                                                                                }"
                data-current-context="{
                                                                                                                                  &quot;video&quot;: {
                                                                                                                                    &quot;playbackSpeed&quot;: 0.5,
                                                                                                                                    &quot;filter&quot;: 1,
                                                                                                                                    &quot;filterStrength&quot;: 0,
                                                                                                                                    &quot;zoom&quot;: 0,
                                                                                                                                    &quot;videoSourceProvider&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;backgroundImageId&quot;: null,
                                                                                                                                  &quot;backgroundMediaEffect&quot;: {
                                                                                                                                    &quot;type&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;divider&quot;: {
                                                                                                                                    &quot;enabled&quot;: false
                                                                                                                                  },
                                                                                                                                  &quot;typeName&quot;: &quot;page&quot;
                                                                                                                                }"
                data-animation="none"
                data-fluid-engine-section










                data-sqsp-section="fluid-engine"


              >
                <div
                  className="section-border"

                >
                  <div className="section-background">














                    <img alt="Creeks.png" src="/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/298d6404-8850-48f1-9ee6-2ac046594e46/Creeks.png" width="1536" height="1024" sizes="(max-width: 799px) 200vw, 100vw" style={{ display: "block", objectPosition: "50% 50%" } as any} loading="eager" decoding="async" />





                    <div className="section-background-overlay" style={{ opacity: "0.6" } as any}></div>


                  </div>
                </div>
                <div
                  className='content-wrapper'
                  style={{} as any}
                >
                  <div
                    className="content"

                  >










                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{
                      __html: `

.fe-6a6216e106233329afceed9b {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(6,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6a6216e106233329afceed9b {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6a6216e106233329afceed9b {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(25,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-yui_3_17_2_1_1784815440434_1013 {
    grid-area: 1/2/7/10;
    z-index: 1;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-yui_3_17_2_1_1784815440434_1013 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1784815440434_1013 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1784815440434_1013 {
      grid-area: 3/10/9/18;
      z-index: 1;

      
        
      

      
    }

    .fe-block-yui_3_17_2_1_1784815440434_1013 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1784815440434_1013 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

` }} /><div className="fluid-engine fe-6a6216e106233329afceed9b"><div className="fe-block fe-block-yui_3_17_2_1_1784815440434_1013"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="yui_3_17_2_1_1784815440434_1013" id="block-yui_3_17_2_1_1784815440434_1013"><div className="sqs-block-content"><div className="sqs-text-block-container">

                        <div className="sqs-html-content" data-sqsp-text-block-content><h1 style={{ textAlign: "center", whiteSpace: "pre-wrap", fontSize: "9vw" } as any} data-rte-preserve-empty="true">Creeks</h1><h3 style={{ textAlign: "center", whiteSpace: "pre-wrap" } as any} data-rte-preserve-empty="true">Alexandria</h3></div>


                        <style id="container-styles" dangerouslySetInnerHTML={{
                          __html: `#block-yui_3_17_2_1_1784815440434_1013 {
    
    --stroke-style: none;--stroke-thickness: 2px;
    
      --tweak-text-block-stroke-color: hsla(var(--black-hsl), 1)
;
      
      
      
    



  }

  #block-yui_3_17_2_1_1784815440434_1013 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-yui_3_17_2_1_1784815440434_1013 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-yui_3_17_2_1_1784815440434_1013 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-yui_3_17_2_1_1784815440434_1013 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-yui_3_17_2_1_1784815440434_1013 {
    --blur-value: blur(15px);}

` }} />

                        <style id="override-container-styles" dangerouslySetInnerHTML={{
                          __html: `
    @media screen and (max-width: 767px) {
          
            

#block-yui_3_17_2_1_1784815440434_1013 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-yui_3_17_2_1_1784815440434_1013 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                        <style className="transform-vars" dangerouslySetInnerHTML={{
                          __html: `
    .fe-block-yui_3_17_2_1_1784815440434_1013 {
      --opacity: 100%;
      --translate-x: 0px;
      --translate-y: 0px;
      --rotation: 0deg;
      --scale-x: 100%;
      --scale-y: 100%;
      --skew-x: 0deg;
      --skew-y: 0deg;
      --origin-x: 50%;
      --origin-y: 50%;
      --block-transform: none;

      opacity: var(--opacity, 1);
      transform: var(--block-transform);
      transform-origin: var(--origin-x) var(--origin-y);
    }
  ` }} /><style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                          __html: `
  
` }} />




                      </div>
                      </div></div></div></div></div>
                  </div>

                </div>

              </section>





















              <section
                data-test="page-section"

                data-section-theme=""
                className='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--small
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
    
    '

                data-section-id="6a6216e106233329afceeda0"

                data-controller="SectionWrapperController"
                data-current-styles="{
                                                                                                                                  &quot;imageOverlayOpacity&quot;: 0.15,
                                                                                                                                  &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                                                                                                                                  &quot;sectionHeight&quot;: &quot;section-height--small&quot;,
                                                                                                                                  &quot;customSectionHeight&quot;: 1,
                                                                                                                                  &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                                                                                                                                  &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                                                                                                                                  &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                                                                                                                                  &quot;customContentWidth&quot;: 50,
                                                                                                                                  &quot;sectionTheme&quot;: &quot;&quot;,
                                                                                                                                  &quot;sectionAnimation&quot;: &quot;none&quot;,
                                                                                                                                  &quot;backgroundMode&quot;: &quot;video&quot;
                                                                                                                                }"
                data-current-context="{
                                                                                                                                  &quot;video&quot;: {
                                                                                                                                    &quot;playbackSpeed&quot;: 0.5,
                                                                                                                                    &quot;filter&quot;: 1,
                                                                                                                                    &quot;filterStrength&quot;: 0,
                                                                                                                                    &quot;zoom&quot;: 0,
                                                                                                                                    &quot;videoSourceProvider&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;backgroundImageId&quot;: null,
                                                                                                                                  &quot;backgroundMediaEffect&quot;: {
                                                                                                                                    &quot;type&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;divider&quot;: {
                                                                                                                                    &quot;enabled&quot;: false
                                                                                                                                  },
                                                                                                                                  &quot;typeName&quot;: &quot;page&quot;
                                                                                                                                }"
                data-animation="none"
                data-fluid-engine-section










                data-sqsp-section="fluid-engine"


              >
                <div
                  className="section-border"

                >
                  <div className="section-background"></div>
                </div>
                <div
                  className='content-wrapper'
                  style={{} as any}
                >
                  <div
                    className="content"

                  >










                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{
                      __html: `

.fe-6a6216e106233329afceed9f {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(47,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6a6216e106233329afceed9f {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6a6216e106233329afceed9f {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(39,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-7dd5155baf5697d20fdf {
    grid-area: 1/2/24/10;
    z-index: 3;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-7dd5155baf5697d20fdf .sqs-block {
    justify-content: center;
  }

  .fe-block-7dd5155baf5697d20fdf .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-7dd5155baf5697d20fdf {
      grid-area: 1/18/40/26;
      z-index: 3;

      

      
    }

    .fe-block-7dd5155baf5697d20fdf .sqs-block {
      justify-content: center;
    }

    .fe-block-7dd5155baf5697d20fdf .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-d18b1109faa91d656809 {
    grid-area: 24/1/31/11;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-d18b1109faa91d656809 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-d18b1109faa91d656809 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-d18b1109faa91d656809 {
      grid-area: 1/1/14/16;
      z-index: 1;

      

      
    }

    .fe-block-d18b1109faa91d656809 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-d18b1109faa91d656809 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-644e8b7cc12900a61616 {
    grid-area: 31/2/46/10;
    z-index: 4;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-644e8b7cc12900a61616 .sqs-block {
    justify-content: center;
  }

  .fe-block-644e8b7cc12900a61616 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-644e8b7cc12900a61616 {
      grid-area: 15/2/40/10;
      z-index: 4;

      

      
    }

    .fe-block-644e8b7cc12900a61616 .sqs-block {
      justify-content: center;
    }

    .fe-block-644e8b7cc12900a61616 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

` }} /><div className="fluid-engine fe-6a6216e106233329afceed9f"><div className="fe-block fe-block-7dd5155baf5697d20fdf"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="7dd5155baf5697d20fdf" id="block-7dd5155baf5697d20fdf"><div className="sqs-block-content"><div className="sqs-text-block-container">

                        <div className="sqs-html-content" data-sqsp-text-block-content><h2 style={{ whiteSpace: "pre-wrap" } as any} data-rte-preserve-empty="true">Creeks by Elsewhere – Alexandria</h2><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Creeks is a new mixed-use residential community in western Alexandria, developed by Elsewhere Developments. The project is located directly next to Carrefour City Center Alexandria and close to the Alexandria Desert Road and the main highway network.</p><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">The master plan is centered around an extensive network of water canals and landscaped open spaces, creating waterfront views for a large number of homes. The community combines villas, townhouses, apartments, retail areas, hospitality, recreational facilities, and community services within one integrated development.</p><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">The project is designed with multiple residential districts connected by pedestrian-friendly streets, green corridors, and water features. Residents benefit from convenient access to shopping, schools, healthcare facilities, and major transportation routes while remaining only a short drive from central Alexandria.</p><p style={{ whiteSpace: "pre-wrap" } as any} data-rte-preserve-empty="true"></p></div>



                        <style id="container-styles" dangerouslySetInnerHTML={{
                          __html: `#block-7dd5155baf5697d20fdf {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-7dd5155baf5697d20fdf .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-7dd5155baf5697d20fdf {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-7dd5155baf5697d20fdf {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-7dd5155baf5697d20fdf {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-7dd5155baf5697d20fdf {
    --blur-value: blur(15px);}

` }} />

                        <style id="override-container-styles" dangerouslySetInnerHTML={{
                          __html: `
    @media screen and (max-width: 767px) {
          
            

#block-7dd5155baf5697d20fdf {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-7dd5155baf5697d20fdf .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                        <style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                          __html: `
  
` }} />




                      </div>
                      </div></div></div><div className="fe-block fe-block-d18b1109faa91d656809"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-video video-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.video/25935d3b-8bd4-47a9-abb5-cc0c236e2de6_555/website.components.video.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.video/25935d3b-8bd4-47a9-abb5-cc0c236e2de6_555/4032.js&quot;,&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.video/25935d3b-8bd4-47a9-abb5-cc0c236e2de6_555/website.components.video.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.video" data-sqsp-block="video" data-website-component-id="d18b1109faa91d656809" id="block-d18b1109faa91d656809"><div className="sqs-block-content">





















                        <div className="intrinsic" style={{ maxWidth: "100%" } as any}>
                          <div className="embed-block-wrapper">
                            <div
                              className="sqs-native-video"
                              data-config-settings="{&quot;aspectRatio&quot;:&quot;auto&quot;}"
                              data-config-video="{&quot;systemDataSourceType&quot;:&quot;mp4&quot;,&quot;alexandriaUrl&quot;:&quot;https://video.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/ffca9d88-e041-4a1c-83cf-b86647843ed7/{variant}&quot;,&quot;durationSeconds&quot;:155.1,&quot;aspectRatio&quot;:1.7666666666666666,&quot;id&quot;:&quot;6a62241170944f4c92719f29&quot;,&quot;systemDataVariants&quot;:&quot;1908:1080,636:360&quot;,&quot;alexandriaLibraryId&quot;:&quot;6a61ec232383587ba923bad7&quot;,&quot;audioCodec&quot;:&quot;aac&quot;,&quot;systemDataId&quot;:&quot;ffca9d88-e041-4a1c-83cf-b86647843ed7&quot;,&quot;videoCodec&quot;:&quot;h264&quot;}"

                            >
                              <div
                                className="native-video-player native-video-player--has-aspect-ratio"
                                style={{ aspectRatio: "1.7666666666666666", position: "relative" } as any}
                              >
                                <video
                                  controls
                                  preload="metadata"
                                  style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 } as any}
                                >
                                  <source src="/videos/Creeks.mp4" type="video/mp4" />
                                </video>
                              </div>
                            </div>
                          </div>





                        </div>





                        <style className="transform-vars" dangerouslySetInnerHTML={{
                          __html: `
    .fe-block-d18b1109faa91d656809 {
      --opacity: 100%;
      --translate-x: 0px;
      --translate-y: 0px;
      --rotation: 0deg;
      --scale-x: 100%;
      --scale-y: 100%;
      --skew-x: 0deg;
      --skew-y: 0deg;
      --origin-x: 50%;
      --origin-y: 50%;
      --block-transform: none;

      opacity: var(--opacity, 1);
      transform: var(--block-transform);
      transform-origin: var(--origin-x) var(--origin-y);
    }
  ` }} /><style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                          __html: `
  
` }} />

                      </div></div></div><div className="fe-block fe-block-644e8b7cc12900a61616"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="644e8b7cc12900a61616" id="block-644e8b7cc12900a61616"><div className="sqs-block-content"><div className="sqs-text-block-container">

                        <div className="sqs-html-content" data-sqsp-text-block-content><p style={{ whiteSpace: "pre-wrap" } as any} data-rte-preserve-empty="true"><strong>Project Highlights</strong></p><ul data-rte-list="default"><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Adjacent to Carrefour City Center Alexandria.</p></li><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Direct access to Alexandria Desert Road and major highways.</p></li><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Master-planned waterfront community with interconnected canals.</p></li><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Villas, townhouses, apartments, and serviced residences.</p></li><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Commercial district, retail promenade, and dining destinations.</p></li><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Landscaped parks, walking paths, and recreational spaces.</p></li><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Schools, clubhouse, and community amenities.</p></li><li><p style={{ whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Modern infrastructure with easy connectivity across Alexandria.</p></li></ul></div>



                        <style id="container-styles" dangerouslySetInnerHTML={{
                          __html: `#block-644e8b7cc12900a61616 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-644e8b7cc12900a61616 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-644e8b7cc12900a61616 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-644e8b7cc12900a61616 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-644e8b7cc12900a61616 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-644e8b7cc12900a61616 {
    --blur-value: blur(15px);}

` }} />

                        <style id="override-container-styles" dangerouslySetInnerHTML={{
                          __html: `
    @media screen and (max-width: 767px) {
          
            

#block-644e8b7cc12900a61616 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-644e8b7cc12900a61616 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                        <style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                          __html: `
  
` }} />




                      </div>
                      </div></div></div></div></div>
                  </div>

                </div>

              </section>





















              <section
                data-test="page-section"

                data-section-theme=""
                className='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
       has-background
    
    
    '

                data-section-id="6a632f9ac5362946e77cea34"

                data-controller="SectionWrapperController"
                data-current-styles="{
                                                                                                                                  &quot;backgroundImage&quot;: {
                                                                                                                                    &quot;id&quot;: &quot;6a632fb947715575cde39d4d&quot;,
                                                                                                                                    &quot;recordType&quot;: 2,
                                                                                                                                    &quot;addedOn&quot;: 1784885177086,
                                                                                                                                    &quot;updatedOn&quot;: 1784885177333,
                                                                                                                                    &quot;workflowState&quot;: 1,
                                                                                                                                    &quot;publishOn&quot;: 1784885177086,
                                                                                                                                    &quot;authorId&quot;: &quot;66ec2290a4e4cd452f2a76f1&quot;,
                                                                                                                                    &quot;systemDataId&quot;: &quot;e4fae151-4d95-4752-8453-65161a44f726&quot;,
                                                                                                                                    &quot;systemDataVariants&quot;: &quot;1284x1504&quot;,
                                                                                                                                    &quot;systemDataSourceType&quot;: &quot;JPG&quot;,
                                                                                                                                    &quot;filename&quot;: &quot;WhatsApp Image 2026-07-22 at 10.30.42 PM.jpeg&quot;,
                                                                                                                                    &quot;mediaFocalPoint&quot;: {
                                                                                                                                      &quot;x&quot;: 0.5,
                                                                                                                                      &quot;y&quot;: 0.5,
                                                                                                                                      &quot;source&quot;: 3
                                                                                                                                    },
                                                                                                                                    &quot;colorData&quot;: {
                                                                                                                                      &quot;topLeftAverage&quot;: &quot;fbfbfb&quot;,
                                                                                                                                      &quot;topRightAverage&quot;: &quot;fefefe&quot;,
                                                                                                                                      &quot;bottomLeftAverage&quot;: &quot;ffffff&quot;,
                                                                                                                                      &quot;bottomRightAverage&quot;: &quot;fefefe&quot;,
                                                                                                                                      &quot;centerAverage&quot;: &quot;fbfafa&quot;,
                                                                                                                                      &quot;suggestedBgColor&quot;: &quot;cad4c1&quot;
                                                                                                                                    },
                                                                                                                                    &quot;urlId&quot;: &quot;9ytxhk6q9xrdw8kwv8hhxs6iupqqg3&quot;,
                                                                                                                                    &quot;title&quot;: &quot;&quot;,
                                                                                                                                    &quot;body&quot;: null,
                                                                                                                                    &quot;likeCount&quot;: 0,
                                                                                                                                    &quot;commentCount&quot;: 0,
                                                                                                                                    &quot;publicCommentCount&quot;: 0,
                                                                                                                                    &quot;commentState&quot;: 2,
                                                                                                                                    &quot;unsaved&quot;: false,
                                                                                                                                    &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/e4fae151-4d95-4752-8453-65161a44f726/WhatsApp+Image+2026-07-22+at+10.30.42+PM.jpeg&quot;,
                                                                                                                                    &quot;contentType&quot;: &quot;image/jpeg&quot;,
                                                                                                                                    &quot;items&quot;: [ ],
                                                                                                                                    &quot;pushedServices&quot;: { },
                                                                                                                                    &quot;pendingPushedServices&quot;: { },
                                                                                                                                    &quot;originalSize&quot;: &quot;1284x1504&quot;,
                                                                                                                                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                                                                                                                                  },
                                                                                                                                  &quot;imageOverlayOpacity&quot;: 0.15,
                                                                                                                                  &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                                                                                                                                  &quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
                                                                                                                                  &quot;customSectionHeight&quot;: 1,
                                                                                                                                  &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                                                                                                                                  &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                                                                                                                                  &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                                                                                                                                  &quot;customContentWidth&quot;: 50,
                                                                                                                                  &quot;sectionTheme&quot;: &quot;&quot;,
                                                                                                                                  &quot;sectionAnimation&quot;: &quot;none&quot;,
                                                                                                                                  &quot;backgroundMode&quot;: &quot;image&quot;
                                                                                                                                }"
                data-current-context="{
                                                                                                                                  &quot;video&quot;: {
                                                                                                                                    &quot;playbackSpeed&quot;: 1,
                                                                                                                                    &quot;filter&quot;: 1,
                                                                                                                                    &quot;filterStrength&quot;: 0,
                                                                                                                                    &quot;zoom&quot;: 0,
                                                                                                                                    &quot;videoSourceProvider&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;backgroundImageId&quot;: null,
                                                                                                                                  &quot;backgroundMediaEffect&quot;: {
                                                                                                                                    &quot;type&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;divider&quot;: {
                                                                                                                                    &quot;enabled&quot;: false
                                                                                                                                  },
                                                                                                                                  &quot;typeName&quot;: &quot;page&quot;
                                                                                                                                }"
                data-animation="none"
                data-fluid-engine-section










                data-sqsp-section="fluid-engine"


              >
                <div
                  className="section-border"

                >
                  <div className="section-background">














                    <img alt="WhatsApp Image 2026-07-22 at 10.30.42 PM.jpeg" src="/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/e4fae151-4d95-4752-8453-65161a44f726/WhatsApp+Image+2026-07-22+at+10.30.42+PM.jpg" width="1284" height="1504" sizes="(max-width: 799px) 200vw, 100vw" style={{ display: "block", objectPosition: "50% 50%" } as any} loading="lazy" decoding="async" />





                    <div className="section-background-overlay" style={{ opacity: "0.15" } as any}></div>


                  </div>
                </div>
                <div
                  className='content-wrapper'
                  style={{} as any}
                >
                  <div
                    className="content"

                  >










                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{
                      __html: `

.fe-6a632f9b22575b57338c462f {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(2,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6a632f9b22575b57338c462f {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6a632f9b22575b57338c462f {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(8,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


` }} /><div className="fluid-engine fe-6a632f9b22575b57338c462f"></div></div>
                  </div>

                </div>

              </section>





















              <section
                data-test="page-section"

                data-section-theme=""
                className='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '

                data-section-id="6a622eb823d1157cd7345c34"

                data-controller="SectionWrapperController"
                data-current-styles="{
                                                                                                                                  &quot;imageOverlayOpacity&quot;: 0.15,
                                                                                                                                  &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                                                                                                                                  &quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
                                                                                                                                  &quot;customSectionHeight&quot;: 10,
                                                                                                                                  &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                                                                                                                                  &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                                                                                                                                  &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                                                                                                                                  &quot;customContentWidth&quot;: 50,
                                                                                                                                  &quot;sectionTheme&quot;: &quot;&quot;,
                                                                                                                                  &quot;sectionAnimation&quot;: &quot;none&quot;,
                                                                                                                                  &quot;backgroundMode&quot;: &quot;image&quot;
                                                                                                                                }"
                data-current-context="{
                                                                                                                                  &quot;video&quot;: null,
                                                                                                                                  &quot;backgroundImageId&quot;: null,
                                                                                                                                  &quot;backgroundMediaEffect&quot;: null,
                                                                                                                                  &quot;divider&quot;: null,
                                                                                                                                  &quot;typeName&quot;: &quot;page&quot;
                                                                                                                                }"
                data-animation="none"
                data-fluid-engine-section










                data-sqsp-section="fluid-engine"


              >
                <div
                  className="section-border"

                >
                  <div className="section-background">



                  </div>
                </div>
                <div
                  className='content-wrapper'
                  style={{} as any}
                >
                  <div
                    className="content"

                  >










                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{
                      __html: `

.fe-6a622eb82e35e910ba3bc06a {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(31,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6a622eb82e35e910ba3bc06a {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6a622eb82e35e910ba3bc06a {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
   

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(28,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-yui_3_17_2_1_1784821689856_2408 {
    grid-area: 1/2/3/10;
    z-index: 6;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-yui_3_17_2_1_1784821689856_2408 .sqs-block {
    justify-content: center;
  }

  .fe-block-yui_3_17_2_1_1784821689856_2408 .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1784821689856_2408 {
      grid-area: 27/11/29/17;
      z-index: 6;

      
        
      

      
    }

    .fe-block-yui_3_17_2_1_1784821689856_2408 .sqs-block {
      justify-content: center;
    }

    .fe-block-yui_3_17_2_1_1784821689856_2408 .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-yui_3_17_2_1_1784885647518_2035 {
    grid-area: 4/2/6/10;
    z-index: 7;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-yui_3_17_2_1_1784885647518_2035 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1784885647518_2035 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1784885647518_2035 {
      grid-area: 1/10/3/18;
      z-index: 7;

      
        
      

      
    }

    .fe-block-yui_3_17_2_1_1784885647518_2035 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1784885647518_2035 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-yui_3_17_2_1_1784885647518_2374 {
    grid-area: 6/2/9/10;
    z-index: 8;

    @media (max-width: 767px) {
      
        
      
      
    }
  }

  .fe-block-yui_3_17_2_1_1784885647518_2374 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-yui_3_17_2_1_1784885647518_2374 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-yui_3_17_2_1_1784885647518_2374 {
      grid-area: 3/10/5/18;
      z-index: 8;

      
        
      

      
    }

    .fe-block-yui_3_17_2_1_1784885647518_2374 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-yui_3_17_2_1_1784885647518_2374 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-7c9fdc9a93cb863918b0 {
    grid-area: 9/2/auto/10; /* Fixed huge gap on mobile */
    z-index: 5;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-7c9fdc9a93cb863918b0 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-7c9fdc9a93cb863918b0 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-7c9fdc9a93cb863918b0 {
      grid-area: 5/8/auto/20; /* Fixed huge gap */
      z-index: 5;

      

      
    }

    .fe-block-7c9fdc9a93cb863918b0 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-7c9fdc9a93cb863918b0 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

` }} /><div className="fluid-engine fe-6a622eb82e35e910ba3bc06a"><div className="fe-block fe-block-yui_3_17_2_1_1784821689856_2408"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-button button-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.button/3648b731-34b1-40c4-b627-cc4fe4547e11_980/website.components.button.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.button/3648b731-34b1-40c4-b627-cc4fe4547e11_980/website.components.button.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.button" data-sqsp-block="button" data-website-component-id="yui_3_17_2_1_1784821689856_2408" id="block-yui_3_17_2_1_1784821689856_2408"><div className="sqs-block-content">











                        <div
                          className="sqs-block-button-container sqs-button-block-container-system_desktop sqs-block-button-container--center sqs-stretched"
                          data-animation-role="button"
                          data-button-size="medium"
                          data-button-type="primary"

                        >
                          <a
                            href="https://static1.squarespace.com/static/6a61ec232383587ba923bad7/t/6a6228c057253e42a338b031/1784817856186/Creeks+by+Elsewhere_compressed_compressed+%282%29.pdf"
                            className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element"
                            data-sqsp-button
                            target="_blank"
                          >
                            creeks brochure
                          </a>




                        </div>










                        <style dangerouslySetInnerHTML={{
                          __html: `
  #block-yui_3_17_2_1_1784821689856_2408 {
    --sqs-block-content-flex: 1;
  }

  
  
    
      
      
    
      
      
        
      
    
  
` }} />
                        <style className="transform-vars" dangerouslySetInnerHTML={{
                          __html: `
    .fe-block-yui_3_17_2_1_1784821689856_2408 {
      --opacity: 100%;
      --translate-x: 0px;
      --translate-y: 0px;
      --rotation: 0deg;
      --scale-x: 100%;
      --scale-y: 100%;
      --skew-x: 0deg;
      --skew-y: 0deg;
      --origin-x: 50%;
      --origin-y: 50%;
      --block-transform: none;

      opacity: var(--opacity, 1);
      transform: var(--block-transform);
      transform-origin: var(--origin-x) var(--origin-y);
    }
  ` }} /><style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                          __html: `
  
` }} />

                      </div></div></div><div className="fe-block fe-block-yui_3_17_2_1_1784885647518_2035"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="yui_3_17_2_1_1784885647518_2035" id="block-yui_3_17_2_1_1784885647518_2035"><div className="sqs-block-content"><div className="sqs-text-block-container">

                        <div className="sqs-html-content" data-sqsp-text-block-content><h3 style={{ textAlign: "center", whiteSpace: "pre-wrap" } as any} data-rte-preserve-empty="true">Find Your Perfect Property</h3></div>



                        <style id="container-styles" dangerouslySetInnerHTML={{
                          __html: `#block-yui_3_17_2_1_1784885647518_2035 {
    
    --stroke-style: none;--stroke-thickness: 2px;
    
      --tweak-text-block-stroke-color: hsla(var(--black-hsl), 1)
;
      
      
      
    



  }

  #block-yui_3_17_2_1_1784885647518_2035 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-yui_3_17_2_1_1784885647518_2035 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-yui_3_17_2_1_1784885647518_2035 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-yui_3_17_2_1_1784885647518_2035 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-yui_3_17_2_1_1784885647518_2035 {
    --blur-value: blur(15px);}

` }} />

                        <style id="override-container-styles" dangerouslySetInnerHTML={{
                          __html: `
    @media screen and (max-width: 767px) {
          
            

#block-yui_3_17_2_1_1784885647518_2035 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-yui_3_17_2_1_1784885647518_2035 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                        <style className="transform-vars" dangerouslySetInnerHTML={{
                          __html: `
    .fe-block-yui_3_17_2_1_1784885647518_2035 {
      --opacity: 100%;
      --translate-x: 0px;
      --translate-y: 0px;
      --rotation: 0deg;
      --scale-x: 100%;
      --scale-y: 100%;
      --skew-x: 0deg;
      --skew-y: 0deg;
      --origin-x: 50%;
      --origin-y: 50%;
      --block-transform: none;

      opacity: var(--opacity, 1);
      transform: var(--block-transform);
      transform-origin: var(--origin-x) var(--origin-y);
    }
  ` }} /><style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                          __html: `
  
` }} />




                      </div>
                      </div></div></div><div className="fe-block fe-block-yui_3_17_2_1_1784885647518_2374"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="yui_3_17_2_1_1784885647518_2374" id="block-yui_3_17_2_1_1784885647518_2374"><div className="sqs-block-content"><div className="sqs-text-block-container">

                        <div className="sqs-html-content" data-sqsp-text-block-content><p style={{ textAlign: "center", whiteSpace: "pre-wrap" } as any} className="sqsrte-small" data-rte-preserve-empty="true">Just share your details below and our expert team will contact you shortly. Fast, reliable, and 100% confidential.</p></div>



                        <style id="container-styles" dangerouslySetInnerHTML={{
                          __html: `#block-yui_3_17_2_1_1784885647518_2374 {
    
    --stroke-style: none;--stroke-thickness: 2px;
    
      --tweak-text-block-stroke-color: hsla(var(--black-hsl), 1)
;
      
      
      
    



  }

  #block-yui_3_17_2_1_1784885647518_2374 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-yui_3_17_2_1_1784885647518_2374 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-yui_3_17_2_1_1784885647518_2374 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-yui_3_17_2_1_1784885647518_2374 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-yui_3_17_2_1_1784885647518_2374 {
    --blur-value: blur(15px);}

` }} />

                        <style id="override-container-styles" dangerouslySetInnerHTML={{
                          __html: `
    @media screen and (max-width: 767px) {
          
            

#block-yui_3_17_2_1_1784885647518_2374 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-yui_3_17_2_1_1784885647518_2374 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                        <style className="transform-vars" dangerouslySetInnerHTML={{
                          __html: `
    .fe-block-yui_3_17_2_1_1784885647518_2374 {
      --opacity: 100%;
      --translate-x: 0px;
      --translate-y: 0px;
      --rotation: 0deg;
      --scale-x: 100%;
      --scale-y: 100%;
      --skew-x: 0deg;
      --skew-y: 0deg;
      --origin-x: 50%;
      --origin-y: 50%;
      --block-transform: none;

      opacity: var(--opacity, 1);
      transform: var(--block-transform);
      transform-origin: var(--origin-x) var(--origin-y);
    }
  ` }} /><style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                          __html: `
  
` }} />




                      </div>
                      </div></div></div><div className="fe-block fe-block-7c9fdc9a93cb863918b0"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-form form-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.form/27be60de-8d5a-490e-aafa-b0438d734062_982/website.components.form.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.form/27be60de-8d5a-490e-aafa-b0438d734062_982/website.components.form.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.form" data-sqsp-block="form" data-website-component-id="7c9fdc9a93cb863918b0" id="block-7c9fdc9a93cb863918b0"><div className="sqs-block-content">






                        <div className="sqs-site-style-form" >





                          <div id="form-submission-html-6a622ebc2e35e910ba3bc0a0" className="sqs-form-block-submission-html" data-submission-html=""></div>
                          <style id="container-styles" dangerouslySetInnerHTML={{
                            __html: `#block-7c9fdc9a93cb863918b0 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-7c9fdc9a93cb863918b0 .form-wrapper {
    
    --form-block-padding: 6% 6% 6% 6%;
  --form-block-padding: initial;
}

  .fe-block-7c9fdc9a93cb863918b0 {
      mix-blend-mode: var(--form-block-blend-mode
    );
      border-radius: var(--form-block-border-radius);
  }

  
  
.fe-block-7c9fdc9a93cb863918b0 {
      --form-block-border-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-7c9fdc9a93cb863918b0 {
      --form-block-blend-mode
    : normal;
    }
  

  .fe-block-7c9fdc9a93cb863918b0 {
    --blur-value: blur(15px);}

` }} />

                          <style id="override-container-styles" dangerouslySetInnerHTML={{
                            __html: `
    @media screen and (max-width: 767px) {
          
            

#block-7c9fdc9a93cb863918b0 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-7c9fdc9a93cb863918b0 .form-wrapper {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />

















                          <ContactForm />
                          <style dangerouslySetInnerHTML={{
                            __html: `
      #block-7c9fdc9a93cb863918b0 .form-wrapper {
        display: grid;
      }

      #block-7c9fdc9a93cb863918b0 .lightbox-handle-wrapper {
        display: none;
      }

      #block-7c9fdc9a93cb863918b0 .lightbox-handle-wrapper-system_desktop {
        display: block;
      }
    ` }} />

                          <style className="overrides-vars" dangerouslySetInnerHTML={{
                            __html: `
      ` }} />

                          <style className="transform-vars" dangerouslySetInnerHTML={{
                            __html: `
    .fe-block-7c9fdc9a93cb863918b0 {
      --opacity: 100%;
      --translate-x: 0px;
      --translate-y: 0px;
      --rotation: 0deg;
      --scale-x: 100%;
      --scale-y: 100%;
      --skew-x: 0deg;
      --skew-y: 0deg;
      --origin-x: 50%;
      --origin-y: 50%;
      --block-transform: none;

      opacity: var(--opacity, 1);
      transform: var(--block-transform);
      transform-origin: var(--origin-x) var(--origin-y);
    }
  ` }} /><style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                            __html: `
  
` }} />





                        </div>
                      </div></div></div></div></div>
                  </div>

                </div>

              </section>





















              <section
                data-test="page-section"

                data-section-theme=""
                className='page-section 
    
      gallery-section
      full-bleed-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '

                data-section-id="6a635e060147871c2aaeb800"

                data-controller="SectionWrapperController"
                data-current-styles="{
                                                                                                                                  &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                                                                                                                                  &quot;imageOverlayOpacity&quot;: 0.15,
                                                                                                                                  &quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
                                                                                                                                  &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                                                                                                                                  &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                                                                                                                                  &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                                                                                                                                  &quot;sectionAnimation&quot;: &quot;none&quot;,
                                                                                                                                  &quot;backgroundMode&quot;: &quot;image&quot;,
                                                                                                                                  &quot;backgroundImage&quot;: null
                                                                                                                                }"
                data-current-context="{
                                                                                                                                  &quot;video&quot;: {
                                                                                                                                    &quot;playbackSpeed&quot;: 0.5,
                                                                                                                                    &quot;filter&quot;: 1,
                                                                                                                                    &quot;filterStrength&quot;: 0,
                                                                                                                                    &quot;zoom&quot;: 0
                                                                                                                                  },
                                                                                                                                  &quot;backgroundImageId&quot;: null,
                                                                                                                                  &quot;backgroundMediaEffect&quot;: null,
                                                                                                                                  &quot;divider&quot;: {
                                                                                                                                    &quot;enabled&quot;: false
                                                                                                                                  },
                                                                                                                                  &quot;typeName&quot;: &quot;page&quot;
                                                                                                                                }"
                data-animation="none"

                data-json-schema-section







                data-sqsp-section="gallery"


              >
                <div
                  className="section-border"

                >
                  <div className="section-background">



                  </div>
                </div>
                <div
                  className='content-wrapper'
                  style={{} as any}
                >
                  <div
                    className="content"

                  >










                    <div className="gallery gallery-section-wrapper" style={{ minHeight: "100px" } as any}>


                      <div className="gallery" style={{ minHeight: "100px" } as any}>

                        <div
                          className="gallery-grid gallery-grid--layout-grid"
                          data-controller="GalleryGrid"

                          data-section-id="6a635e060147871c2aaeb800"
                          data-animation="site-default"
                          data-lightbox=""
                          data-width="inset"
                          data-aspect-ratio="square"
                          data-columns="2"
                          data-gutter="48"
                          data-props='{
                                                                                                                                  "aspectRatio": "square",
                                                                                                                                  "scrollAnimation": "site-default",
                                                                                                                                  "gutter": 48,
                                                                                                                                  "numColumns": 2,
                                                                                                                                  "width": "inset",
                                                                                                                                  "lightboxEnabled": false
                                                                                                                                }'
                          data-show-captions="false"
                          data-test="gallery-grid-simple"
                        >
                          <div className="gallery-grid-wrapper">

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-07.png" src="/images/Creeks-2.png" width="2011" height="1993" sizes="49.24074259909684vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-08.png" src="/images/Creeks-3.png" width="2030" height="1940" sizes="51.0639175257732vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-09.png" src="/images/Creeks-4.png" width="2040" height="1975" sizes="50.406075949367086vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-12.png" src="/images/Creeks-5.png" width="2955" height="1958" sizes="73.64862104187947vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-13.png" src="/images/Creeks-6.png" width="2943" height="1934" sizes="74.25977249224405vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-14.png" src="/images/Creeks-7.png" width="2928" height="1919" sizes="74.45878061490359vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-17.png" src="/images/Creeks-8.png" width="2925" height="1950" sizes="73.19999999999999vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-18.png" src="/images/Creeks+by+Elsewhere-18.png" width="2938" height="1977" sizes="72.52119372787051vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                            <figure className="gallery-grid-item">
                              <div className="gallery-grid-item-wrapper" data-animation-role="image">




                                <img alt="Creeks by Elsewhere-19.png" src="/images/Creeks+by+Elsewhere-19.png" width="2931" height="1954" sizes="73.19999999999999vw" style={{ display: "block", objectPosition: "50% 50%", objectFit: "cover", width: "100%", height: "100%" } as any} loading="lazy" decoding="async" />




                              </div>

                            </figure>

                          </div>

                        </div>












                      </div>

                    </div>


                  </div>

                </div>

              </section>





















              <section
                data-test="page-section"

                data-section-theme=""
                className='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--medium
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
       has-background
    
    
    '

                data-section-id="6a633034b3f2266e51928aee"

                data-controller="SectionWrapperController"
                data-current-styles="{
                                                                                                                                  &quot;backgroundImage&quot;: {
                                                                                                                                    &quot;id&quot;: &quot;6a633045eb8af40dbff66046&quot;,
                                                                                                                                    &quot;recordType&quot;: 2,
                                                                                                                                    &quot;addedOn&quot;: 1784885317164,
                                                                                                                                    &quot;updatedOn&quot;: 1784885317222,
                                                                                                                                    &quot;workflowState&quot;: 1,
                                                                                                                                    &quot;publishOn&quot;: 1784885317164,
                                                                                                                                    &quot;authorId&quot;: &quot;66ec2290a4e4cd452f2a76f1&quot;,
                                                                                                                                    &quot;systemDataId&quot;: &quot;1d4e4163-f95d-4eb4-bd8a-6cb7471d4b3a&quot;,
                                                                                                                                    &quot;systemDataVariants&quot;: &quot;1536x1024&quot;,
                                                                                                                                    &quot;systemDataSourceType&quot;: &quot;PNG&quot;,
                                                                                                                                    &quot;filename&quot;: &quot;Creeks (2).png&quot;,
                                                                                                                                    &quot;mediaFocalPoint&quot;: {
                                                                                                                                      &quot;x&quot;: 0.5,
                                                                                                                                      &quot;y&quot;: 0.5,
                                                                                                                                      &quot;source&quot;: 3
                                                                                                                                    },
                                                                                                                                    &quot;colorData&quot;: {
                                                                                                                                      &quot;topLeftAverage&quot;: &quot;1a2326&quot;,
                                                                                                                                      &quot;topRightAverage&quot;: &quot;1a2127&quot;,
                                                                                                                                      &quot;bottomLeftAverage&quot;: &quot;214364&quot;,
                                                                                                                                      &quot;bottomRightAverage&quot;: &quot;102d42&quot;,
                                                                                                                                      &quot;centerAverage&quot;: &quot;575347&quot;,
                                                                                                                                      &quot;suggestedBgColor&quot;: &quot;414c50&quot;
                                                                                                                                    },
                                                                                                                                    &quot;urlId&quot;: &quot;xxol0jk49z514c1fcdstxznycr2kzc&quot;,
                                                                                                                                    &quot;title&quot;: &quot;&quot;,
                                                                                                                                    &quot;body&quot;: null,
                                                                                                                                    &quot;likeCount&quot;: 0,
                                                                                                                                    &quot;commentCount&quot;: 0,
                                                                                                                                    &quot;publicCommentCount&quot;: 0,
                                                                                                                                    &quot;commentState&quot;: 2,
                                                                                                                                    &quot;unsaved&quot;: false,
                                                                                                                                    &quot;assetUrl&quot;: &quot;https://images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1d4e4163-f95d-4eb4-bd8a-6cb7471d4b3a/Creeks+%282%29.png&quot;,
                                                                                                                                    &quot;contentType&quot;: &quot;image/png&quot;,
                                                                                                                                    &quot;items&quot;: [ ],
                                                                                                                                    &quot;pushedServices&quot;: { },
                                                                                                                                    &quot;pendingPushedServices&quot;: { },
                                                                                                                                    &quot;originalSize&quot;: &quot;1536x1024&quot;,
                                                                                                                                    &quot;recordTypeLabel&quot;: &quot;image&quot;
                                                                                                                                  },
                                                                                                                                  &quot;imageOverlayOpacity&quot;: 0.0,
                                                                                                                                  &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                                                                                                                                  &quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
                                                                                                                                  &quot;customSectionHeight&quot;: 10,
                                                                                                                                  &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                                                                                                                                  &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                                                                                                                                  &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                                                                                                                                  &quot;customContentWidth&quot;: 50,
                                                                                                                                  &quot;sectionTheme&quot;: &quot;&quot;,
                                                                                                                                  &quot;sectionAnimation&quot;: &quot;none&quot;,
                                                                                                                                  &quot;backgroundMode&quot;: &quot;image&quot;
                                                                                                                                }"
                data-current-context="{
                                                                                                                                  &quot;video&quot;: {
                                                                                                                                    &quot;playbackSpeed&quot;: 1,
                                                                                                                                    &quot;filter&quot;: 1,
                                                                                                                                    &quot;filterStrength&quot;: 0,
                                                                                                                                    &quot;zoom&quot;: 0,
                                                                                                                                    &quot;videoSourceProvider&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;backgroundImageId&quot;: null,
                                                                                                                                  &quot;backgroundMediaEffect&quot;: {
                                                                                                                                    &quot;type&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;divider&quot;: {
                                                                                                                                    &quot;enabled&quot;: false
                                                                                                                                  },
                                                                                                                                  &quot;typeName&quot;: &quot;page&quot;
                                                                                                                                }"
                data-animation="none"
                data-fluid-engine-section










                data-sqsp-section="fluid-engine"


              >
                <div
                  className="section-border"

                >
                  <div className="section-background">














                    <img alt="Creeks (2).png" src="/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1d4e4163-f95d-4eb4-bd8a-6cb7471d4b3a/Creeks+(2).png" width="1536" height="1024" sizes="(max-width: 799px) 200vw, 100vw" style={{ display: "block", objectPosition: "50% 50%" } as any} loading="lazy" decoding="async" />





                    <div className="section-background-overlay" style={{ opacity: "0" } as any}></div>


                  </div>
                </div>
                <div
                  className='content-wrapper'
                  style={{} as any}
                >
                  <div
                    className="content"

                  >










                    <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{
                      __html: `

.fe-6a6330342fb9d1228122f4b1 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(2,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6a6330342fb9d1228122f4b1 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6a6330342fb9d1228122f4b1 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(8,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


` }} /><div className="fluid-engine fe-6a6330342fb9d1228122f4b1"></div></div>
                  </div>

                </div>

              </section>




            </section>

          </article>











        </main>

        <footer className="sections" id="footer-sections" data-footer-sections>























          <section
            data-test="page-section"

            data-section-theme=""
            className='page-section 
    
      full-bleed-section
      layout-engine-section
    
    background-width--full-bleed
    
      section-height--small
    
    
      content-width--wide
    
    horizontal-alignment--center
    vertical-alignment--middle
    
      
    
    
    '

            data-section-id="6a61ec242383587ba923bb18"

            data-controller="SectionWrapperController"
            data-current-styles="{
                                                                                                                                  &quot;imageOverlayOpacity&quot;: 0.15,
                                                                                                                                  &quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
                                                                                                                                  &quot;sectionHeight&quot;: &quot;section-height--small&quot;,
                                                                                                                                  &quot;customSectionHeight&quot;: 40,
                                                                                                                                  &quot;horizontalAlignment&quot;: &quot;horizontal-alignment--center&quot;,
                                                                                                                                  &quot;verticalAlignment&quot;: &quot;vertical-alignment--middle&quot;,
                                                                                                                                  &quot;contentWidth&quot;: &quot;content-width--wide&quot;,
                                                                                                                                  &quot;customContentWidth&quot;: 50,
                                                                                                                                  &quot;sectionAnimation&quot;: &quot;none&quot;,
                                                                                                                                  &quot;backgroundMode&quot;: &quot;image&quot;
                                                                                                                                }"
            data-current-context="{
                                                                                                                                  &quot;video&quot;: {
                                                                                                                                    &quot;playbackSpeed&quot;: 0.5,
                                                                                                                                    &quot;filter&quot;: 1,
                                                                                                                                    &quot;filterStrength&quot;: 0,
                                                                                                                                    &quot;zoom&quot;: 0,
                                                                                                                                    &quot;videoSourceProvider&quot;: &quot;none&quot;
                                                                                                                                  },
                                                                                                                                  &quot;backgroundImageId&quot;: null,
                                                                                                                                  &quot;backgroundMediaEffect&quot;: null,
                                                                                                                                  &quot;divider&quot;: null,
                                                                                                                                  &quot;typeName&quot;: &quot;page&quot;
                                                                                                                                }"
            data-animation="none"
            data-fluid-engine-section










            data-sqsp-section="fluid-engine"


          >
            <div
              className="section-border"

            >
              <div className="section-background">



              </div>
            </div>
            <div
              className='content-wrapper'
              style={{} as any}
            >
              <div
                className="content"

              >










                <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{
                  __html: `

.fe-6a61ec242383587ba923bb17 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 11.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(10,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 11.0px;
  column-gap: 11.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6a61ec242383587ba923bb17 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6a61ec242383587ba923bb17 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 11.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (11.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(4,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-6199fd0f090a88dc3673 {
    grid-area: 1/2/2/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-6199fd0f090a88dc3673 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-6199fd0f090a88dc3673 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-6199fd0f090a88dc3673 {
      grid-area: 1/2/3/20;
      z-index: 0;

      

      
    }

    .fe-block-6199fd0f090a88dc3673 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-6199fd0f090a88dc3673 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-3740fcc9165515c3c74a {
    grid-area: 3/2/6/10;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-3740fcc9165515c3c74a .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-3740fcc9165515c3c74a .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-3740fcc9165515c3c74a {
      grid-area: 3/2/5/9;
      z-index: 1;

      

      
    }

    .fe-block-3740fcc9165515c3c74a .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-3740fcc9165515c3c74a .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-f3bbea4717b8aea17eb0 {
    grid-area: 7/2/9/10;
    z-index: 2;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-f3bbea4717b8aea17eb0 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-f3bbea4717b8aea17eb0 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-f3bbea4717b8aea17eb0 {
      grid-area: 3/9/4/21;
      z-index: 2;

      

      
    }

    .fe-block-f3bbea4717b8aea17eb0 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-f3bbea4717b8aea17eb0 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-4f22a70a191b549d3759 {
    grid-area: 9/2/11/10;
    z-index: 3;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-4f22a70a191b549d3759 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-4f22a70a191b549d3759 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-4f22a70a191b549d3759 {
      grid-area: 4/9/5/21;
      z-index: 3;

      

      
    }

    .fe-block-4f22a70a191b549d3759 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-4f22a70a191b549d3759 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

` }} /><div className="fluid-engine fe-6a61ec242383587ba923bb17"><div className="fe-block fe-block-6199fd0f090a88dc3673"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="6199fd0f090a88dc3673" id="block-6199fd0f090a88dc3673"><div className="sqs-block-content"><div className="sqs-text-block-container">

                    <div className="sqs-html-content" data-sqsp-text-block-content><h3 style={{ textAlign: "center", whiteSpace: "pre-wrap" } as any}>elsewhere</h3></div>



                    <style id="container-styles" dangerouslySetInnerHTML={{
                      __html: `#block-6199fd0f090a88dc3673 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-6199fd0f090a88dc3673 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-6199fd0f090a88dc3673 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-6199fd0f090a88dc3673 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-6199fd0f090a88dc3673 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-6199fd0f090a88dc3673 {
    --blur-value: blur(15px);}

` }} />

                    <style id="override-container-styles" dangerouslySetInnerHTML={{
                      __html: `
    @media screen and (max-width: 767px) {
          
            

#block-6199fd0f090a88dc3673 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-6199fd0f090a88dc3673 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                    <style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                      __html: `
  
` }} />




                  </div>
                  </div></div></div><div className="fe-block fe-block-3740fcc9165515c3c74a"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="3740fcc9165515c3c74a" id="block-3740fcc9165515c3c74a"><div className="sqs-block-content"><div className="sqs-text-block-container">

                    <div className="sqs-html-content" data-sqsp-text-block-content><p style={{ textAlign: "center", whiteSpace: "pre-wrap" } as any} className="">Address: 46 Ring Road, Second Block, Alexandria</p></div>



                    <style id="container-styles" dangerouslySetInnerHTML={{
                      __html: `#block-3740fcc9165515c3c74a {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-3740fcc9165515c3c74a .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-3740fcc9165515c3c74a {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-3740fcc9165515c3c74a {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-3740fcc9165515c3c74a {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-3740fcc9165515c3c74a {
    --blur-value: blur(15px);}

` }} />

                    <style id="override-container-styles" dangerouslySetInnerHTML={{
                      __html: `
    @media screen and (max-width: 767px) {
          
            

#block-3740fcc9165515c3c74a {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-3740fcc9165515c3c74a .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                    <style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                      __html: `
  
` }} />




                  </div>
                  </div></div></div><div className="fe-block fe-block-f3bbea4717b8aea17eb0"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="f3bbea4717b8aea17eb0" id="block-f3bbea4717b8aea17eb0"><div className="sqs-block-content"><div className="sqs-text-block-container">

                    <div className="sqs-html-content" data-sqsp-text-block-content><p className="" style={{ textAlign: "center", whiteSpace: "pre-wrap" } as any} data-rte-preserve-empty="true">Email Address: sales@elsewhere-egy.net</p></div>



                    <style id="container-styles" dangerouslySetInnerHTML={{
                      __html: `#block-f3bbea4717b8aea17eb0 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-f3bbea4717b8aea17eb0 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-f3bbea4717b8aea17eb0 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-f3bbea4717b8aea17eb0 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-f3bbea4717b8aea17eb0 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-f3bbea4717b8aea17eb0 {
    --blur-value: blur(15px);}

` }} />

                    <style id="override-container-styles" dangerouslySetInnerHTML={{
                      __html: `
    @media screen and (max-width: 767px) {
          
            

#block-f3bbea4717b8aea17eb0 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-f3bbea4717b8aea17eb0 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                    <style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                      __html: `
  
` }} />




                  </div>
                  </div></div></div><div className="fe-block fe-block-4f22a70a191b549d3759"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/d01d9fd8-3193-4bda-936f-1aec27126dc9_810/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="4f22a70a191b549d3759" id="block-4f22a70a191b549d3759"><div className="sqs-block-content"><div className="sqs-text-block-container">

                    <div className="sqs-html-content" data-sqsp-text-block-content><p className="sqsrte-small" style={{ textAlign: "center", whiteSpace: "pre-wrap" } as any} data-rte-preserve-empty="true">Â© Copyright elsewhere 2026</p></div>



                    <style id="container-styles" dangerouslySetInnerHTML={{
                      __html: `#block-4f22a70a191b549d3759 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-4f22a70a191b549d3759 .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-4f22a70a191b549d3759 {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-4f22a70a191b549d3759 {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-4f22a70a191b549d3759 {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-4f22a70a191b549d3759 {
    --blur-value: blur(15px);}

` }} />

                    <style id="override-container-styles" dangerouslySetInnerHTML={{
                      __html: `
    @media screen and (max-width: 767px) {
          
            

#block-4f22a70a191b549d3759 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-4f22a70a191b549d3759 .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
                    <style className="transform-overrides-vars" dangerouslySetInnerHTML={{
                      __html: `
  
` }} />




                  </div>
                  </div></div></div></div></div>
              </div>

            </div>

          </section>


        </footer>


      </div>





    </>
  );
};
export default Creeks;



