// @ts-nocheck
import React from 'react';
import { ContactForm } from '@/components/ui/ContactForm';

export const Contact = () => {
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
    style={{"--solidHeaderBackgroundColor": "hsla(var(--white-hsl), 1)", "--solidHeaderNavigationColor": "hsla(var(--black-hsl), 1)", "--gradientHeaderBackgroundColor": "hsla(var(--white-hsl), 1)", "--gradientHeaderNavigationColor": "hsla(var(--black-hsl), 1)"} as any}
   className="header-theme-light" style={{ backgroundColor: "#FFFFFF", color: "#000000" } as any}>
    <svg  style={{display: "none"} as any} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
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
    <path d="M19 11L3 11"/>
  </symbol>
  
  <symbol id="closedArrow" >
    <path d="M11 11V2M11 18.1797L17 11.1477L5 11.1477L11 18.1797Z" fill="none" />
  </symbol>
  
  <symbol id="closedArrowFilled" >
    <path d="M11 11L11 2" stroke="inherit" fill="none"  />
    <path fillRule="evenodd" clipRule="evenodd" d="M2.74695 9.38428L19.038 9.38428L10.8925 19.0846L2.74695 9.38428Z" strokeWidth="1" />
  </symbol>
  
  <symbol id="closedArrowHead" viewBox="0 0 22 22"  xmlns="http://www.w3.org/2000/symbol">
    <path d="M18 7L11 15L4 7L18 7Z" fill="none" stroke="inherit" />
  </symbol>
  
  
  <symbol id="closedArrowHeadFilled" viewBox="0 0 22 22"  xmlns="http://www.w3.org/2000/symbol">
    <path d="M18.875 6.5L11 15.5L3.125 6.5L18.875 6.5Z" />
  </symbol>
  
  <symbol id="openArrow" >
    <path d="M11 18.3591L11 3" stroke="inherit" fill="none"  />
    <path d="M18 11.5L11 18.5L4 11.5" stroke="inherit" fill="none"  />
  </symbol>
  
  <symbol id="openArrowHead" >
    <path d="M18 7L11 14L4 7" fill="none" />
  </symbol>

  <symbol id="pinchedArrow" >
    <path d="M11 17.3591L11 2" fill="none" />
    <path d="M2 11C5.85455 12.2308 8.81818 14.9038 11 18C13.1818 14.8269 16.1455 12.1538 20 11" fill="none" />
  </symbol>

  <symbol id="pinchedArrowFilled" >
    <path d="M11.05 10.4894C7.04096 8.73759 1.05005 8 1.05005 8C6.20459 11.3191 9.41368 14.1773 11.05 21C12.6864 14.0851 15.8955 11.227 21.05 8C21.05 8 15.0591 8.73759 11.05 10.4894Z" strokeWidth="1"/>
    <path d="M11 11L11 1" fill="none"/>
  </symbol>

  <symbol id="pinchedArrowHead" >
    <path d="M2 7.24091C5.85455 8.40454 8.81818 10.9318 11 13.8591C13.1818 10.8591 16.1455 8.33181 20 7.24091"  fill="none" />
  </symbol>
  
  <symbol id="pinchedArrowHeadFilled" >
    <path d="M11.05 7.1591C7.04096 5.60456 1.05005 4.95001 1.05005 4.95001C6.20459 7.89547 9.41368 10.4318 11.05 16.4864C12.6864 10.35 15.8955 7.81365 21.05 4.95001C21.05 4.95001 15.0591 5.60456 11.05 7.1591Z" />
  </symbol>

</svg>
    
<div className="sqs-announcement-bar-dropzone"></div>

    <div className="header-announcement-bar-wrapper">
      

      


<style dangerouslySetInnerHTML={{ __html: `
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
                        
<img src="/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1784802349155-BSSTHU00UQAFMZRNZ8JE/elsewhere26f7.jpg?format=1500w" alt="elsewhere" style={{display: "block"} as any} loading="eager" decoding="async" />

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
  
  
  


  
    <div className="header-nav-item header-nav-item--collection">
      <a
        href="/projects/creeks"
        data-animation-role="header-element"
        
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
  
  
  


  
    <div className="header-nav-item header-nav-item--collection header-nav-item--active">
      <a
        href="/contact"
        data-animation-role="header-element"
        
          aria-current="page"
        
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
          
            


<style dangerouslySetInnerHTML={{ __html: `
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
                        
<img src="/images.squarespace-cdn.com/content/v1/6a61ec232383587ba923bad7/1784802349155-BSSTHU00UQAFMZRNZ8JE/elsewhere26f7.jpg?format=1500w" alt="elsewhere" style={{display: "block"} as any} loading="eager" decoding="async" />

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
  
  
  


  
    <div className="header-nav-item header-nav-item--collection">
      <a
        href="/projects/creeks"
        data-animation-role="header-element"
        
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
  
  
  


  
    <div className="header-nav-item header-nav-item--collection header-nav-item--active">
      <a
        href="/contact"
        data-animation-role="header-element"
        
          aria-current="page"
        
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
          
            


<style dangerouslySetInnerHTML={{ __html: `
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
          
        
      
    
      
        
          
            <div className="container header-menu-nav-item header-menu-nav-item--collection">
              <a
                href="/projects/creeks"
                
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
          
        
      
    
      
        
          
            <div className="container header-menu-nav-item header-menu-nav-item--collection header-menu-nav-item--active">
              <a
                href="/contact"
                
                  aria-current="page"
                
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
  data-collection-id="6a61ec2c2383587ba923beee"
  data-item-id=""
  data-regions-source="collection"
>
  
  
  
    
    
    
    <section className="region" data-region-id="6a61ec2c2383587ba923beed">
      
    
      
        
        


  
  











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
  
  data-section-id="6a61ec2c2383587ba923bef2"
  
  data-controller="SectionWrapperController"
  data-current-styles="{
&quot;imageOverlayOpacity&quot;: 0.15,
&quot;backgroundWidth&quot;: &quot;background-width--full-bleed&quot;,
&quot;sectionHeight&quot;: &quot;section-height--medium&quot;,
&quot;customSectionHeight&quot;: 20,
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
    
      
    
    </div>
  </div>
  <div
    className='content-wrapper'
    style={{} as any}
  >
    <div
      className="content"
      
    >
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{ __html: `

.fe-6a61ec2c2383587ba923bef1 {
  --grid-gutter: calc(var(--sqs-mobile-site-gutter, 6vw) - 0.0px);
  --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (8 - 1)) ) / 8 );

  display: grid;
  position: relative;
  grid-area: 1/1/-1/-1;
  grid-template-rows: repeat(38,minmax(24px, auto));
  grid-template-columns:
    minmax(var(--grid-gutter), 1fr)
    repeat(8, minmax(0, var(--cell-max-width)))
    minmax(var(--grid-gutter), 1fr);
  row-gap: 0.0px;
  column-gap: 0.0px;
  overflow-x: hidden;
  overflow-x: clip;
}

@media (min-width: 768px) {
  .background-width--inset .fe-6a61ec2c2383587ba923bef1 {
    --inset-padding: calc(var(--sqs-site-gutter) * 2);
  }

  .fe-6a61ec2c2383587ba923bef1 {
    --grid-gutter: calc(var(--sqs-site-gutter, 4vw) - 0.0px);
    --cell-max-width: calc( ( var(--sqs-site-max-width, 1500px) - (0.0px * (24 - 1)) ) / 24 );
    --inset-padding: 0vw;

    --row-height-scaling-factor: 0.0215;
    --container-width: min(var(--sqs-site-max-width, 1500px), calc(100vw - var(--sqs-site-gutter, 4vw) * 2 - var(--inset-padding) ));

    grid-template-rows: repeat(27,minmax(calc(var(--container-width) * var(--row-height-scaling-factor)), auto));
    grid-template-columns:
      minmax(var(--grid-gutter), 1fr)
      repeat(24, minmax(0, var(--cell-max-width)))
      minmax(var(--grid-gutter), 1fr);
  }
}


  .fe-block-ba0f66b182fa0cc3761c {
    grid-area: 1/2/6/10;
    z-index: 0;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-ba0f66b182fa0cc3761c .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-ba0f66b182fa0cc3761c .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-ba0f66b182fa0cc3761c {
      grid-area: 1/2/6/12;
      z-index: 0;

      

      
    }

    .fe-block-ba0f66b182fa0cc3761c .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-ba0f66b182fa0cc3761c .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

  .fe-block-c28b855cc5303690486a {
    grid-area: 6/2/7/10;
    z-index: 1;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-c28b855cc5303690486a .sqs-block {
    justify-content: center;
  }

  .fe-block-c28b855cc5303690486a .sqs-block-alignment-wrapper {
    align-items: center;
  }

  @media (min-width: 768px) {
    .fe-block-c28b855cc5303690486a {
      grid-area: 7/2/8/8;
      z-index: 1;

      

      
    }

    .fe-block-c28b855cc5303690486a .sqs-block {
      justify-content: center;
    }

    .fe-block-c28b855cc5303690486a .sqs-block-alignment-wrapper {
      align-items: center;
    }
  }

  .fe-block-a5f16b77c7d8a0546f42 {
    grid-area: 8/2/39/10;
    z-index: 4;

    @media (max-width: 767px) {
      
      
    }
  }

  .fe-block-a5f16b77c7d8a0546f42 .sqs-block {
    justify-content: flex-start;
  }

  .fe-block-a5f16b77c7d8a0546f42 .sqs-block-alignment-wrapper {
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    .fe-block-a5f16b77c7d8a0546f42 {
      grid-area: 1/14/27/26;
      z-index: 4;

      

      
    }

    .fe-block-a5f16b77c7d8a0546f42 .sqs-block {
      justify-content: flex-start;
    }

    .fe-block-a5f16b77c7d8a0546f42 .sqs-block-alignment-wrapper {
      align-items: flex-start;
    }
  }

` }} /><div className="fluid-engine fe-6a61ec2c2383587ba923bef1"><div className="fe-block fe-block-ba0f66b182fa0cc3761c"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="ba0f66b182fa0cc3761c" id="block-ba0f66b182fa0cc3761c"><div className="sqs-block-content"><div className="sqs-text-block-container">
  
  <div className="sqs-html-content" data-sqsp-text-block-content><h2 style={{whiteSpace: "pre-wrap"} as any}>Contact Us </h2><p className="" style={{whiteSpace: "pre-wrap"} as any}>We are here to help </p></div>


  
<style id="container-styles" dangerouslySetInnerHTML={{ __html: `#block-ba0f66b182fa0cc3761c {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-ba0f66b182fa0cc3761c .sqs-html-content {
    
    --tweak-text-block-padding: 6% 6% 6% 6%;
  --tweak-text-block-padding: initial;
}

  .fe-block-ba0f66b182fa0cc3761c {
      mix-blend-mode: var(--tweak-text-block-blend
  );
      border-radius: var(--tweak-text-block-radius);
  }

  
  
.fe-block-ba0f66b182fa0cc3761c {
      --tweak-text-block-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-ba0f66b182fa0cc3761c {
      --tweak-text-block-blend
  : normal;
    }
  

  .fe-block-ba0f66b182fa0cc3761c {
    --blur-value: blur(15px);}

` }} />

<style id="override-container-styles" dangerouslySetInnerHTML={{ __html: `
    @media screen and (max-width: 767px) {
          
            

#block-ba0f66b182fa0cc3761c {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-ba0f66b182fa0cc3761c .sqs-html-content {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />
<style className="transform-overrides-vars" dangerouslySetInnerHTML={{ __html: `
  
` }} />




</div>
</div></div></div><div className="fe-block fe-block-c28b855cc5303690486a"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-horizontalrule horizontalrule-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.horizontalrule/0264100d-fde5-4681-86e8-788d971a28e0_178/website.components.horizontalrule.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.horizontalrule/0264100d-fde5-4681-86e8-788d971a28e0_178/website.components.horizontalrule.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.horizontalrule" data-sqsp-block="line" data-website-component-id="c28b855cc5303690486a" id="block-c28b855cc5303690486a"><div className="sqs-block-content">
  


<div>
  <hr />
  
    <style className="transform-overrides-vars" dangerouslySetInnerHTML={{ __html: `
  
` }} />

    



  
</div>
</div></div></div><div className="fe-block fe-block-a5f16b77c7d8a0546f42"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-form form-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.form/c7b669e7-6c6d-4a3f-b86a-79406134e45f_983/website.components.form.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.form/c7b669e7-6c6d-4a3f-b86a-79406134e45f_983/website.components.form.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.form" data-sqsp-block="form" data-website-component-id="a5f16b77c7d8a0546f42" id="block-a5f16b77c7d8a0546f42"><div className="sqs-block-content">






  <div className="sqs-site-style-form" >
    
    
    
    
    
    <div id="form-submission-html-6a61ec2c2383587ba923beec" className="sqs-form-block-submission-html" data-submission-html=""></div>
<style id="container-styles" dangerouslySetInnerHTML={{ __html: `#block-a5f16b77c7d8a0546f42 {
    
    --stroke-style: none;--stroke-thickness: 6px;
    
      
      
      
    



  }

  #block-a5f16b77c7d8a0546f42 .form-wrapper {
    
    --form-block-padding: 6% 6% 6% 6%;
  --form-block-padding: initial;
}

  .fe-block-a5f16b77c7d8a0546f42 {
      mix-blend-mode: var(--form-block-blend-mode
    );
      border-radius: var(--form-block-border-radius);
  }

  
  
.fe-block-a5f16b77c7d8a0546f42 {
      --form-block-border-radius: 0px 0px 0px 0px;
    }


  
  .fe-block-a5f16b77c7d8a0546f42 {
      --form-block-blend-mode
    : normal;
    }
  

  .fe-block-a5f16b77c7d8a0546f42 {
    --blur-value: blur(15px);}

` }} />

<style id="override-container-styles" dangerouslySetInnerHTML={{ __html: `
    @media screen and (max-width: 767px) {
          
            

#block-a5f16b77c7d8a0546f42 {
            
            }
        }
    
  
    @media screen and (max-width: 767px) {
          #block-a5f16b77c7d8a0546f42 .form-wrapper {
            
            }
        }
    
  @media screen and (max-width: 767px) {
          
          

          
          
          
        }` }} />

    
      
  
    
      


    
  
    
      
    
  

    

    <ContactForm />
    <style dangerouslySetInnerHTML={{ __html: `
      #block-a5f16b77c7d8a0546f42 .form-wrapper {
        display: grid;
      }

      #block-a5f16b77c7d8a0546f42 .lightbox-handle-wrapper {
        display: none;
      }

      #block-a5f16b77c7d8a0546f42 .lightbox-handle-wrapper-system_desktop {
        display: block;
      }
    ` }} />
    
      <style className="overrides-vars" dangerouslySetInnerHTML={{ __html: `
      ` }} />
    
    <style className="transform-vars" dangerouslySetInnerHTML={{ __html: `
    .fe-block-a5f16b77c7d8a0546f42 {
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
  ` }} /><style className="transform-overrides-vars" dangerouslySetInnerHTML={{ __html: `
  
` }} />

    



  </div>
</div></div></div></div></div>
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
      
      
      
      
      
      
      
      
      
      
      <div data-fluid-engine="true"><style dangerouslySetInnerHTML={{ __html: `

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

` }} /><div className="fluid-engine fe-6a61ec242383587ba923bb17"><div className="fe-block fe-block-6199fd0f090a88dc3673"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="6199fd0f090a88dc3673" id="block-6199fd0f090a88dc3673"><div className="sqs-block-content"><div className="sqs-text-block-container">
  
  <div className="sqs-html-content" data-sqsp-text-block-content><h3 style={{textAlign: "center", whiteSpace: "pre-wrap"} as any}>elsewhere</h3></div>


  
<style id="container-styles" dangerouslySetInnerHTML={{ __html: `#block-6199fd0f090a88dc3673 {
    
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

<style id="override-container-styles" dangerouslySetInnerHTML={{ __html: `
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
<style className="transform-overrides-vars" dangerouslySetInnerHTML={{ __html: `
  
` }} />




</div>
</div></div></div><div className="fe-block fe-block-3740fcc9165515c3c74a"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="3740fcc9165515c3c74a" id="block-3740fcc9165515c3c74a"><div className="sqs-block-content"><div className="sqs-text-block-container">
  
  <div className="sqs-html-content" data-sqsp-text-block-content><p style={{textAlign: "center", whiteSpace: "pre-wrap"} as any} className="">Address: 46 Ring Road, Second Block, Alexandria</p></div>


  
<style id="container-styles" dangerouslySetInnerHTML={{ __html: `#block-3740fcc9165515c3c74a {
    
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

<style id="override-container-styles" dangerouslySetInnerHTML={{ __html: `
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
<style className="transform-overrides-vars" dangerouslySetInnerHTML={{ __html: `
  
` }} />




</div>
</div></div></div><div className="fe-block fe-block-f3bbea4717b8aea17eb0"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="f3bbea4717b8aea17eb0" id="block-f3bbea4717b8aea17eb0"><div className="sqs-block-content"><div className="sqs-text-block-container">
  
  <div className="sqs-html-content" data-sqsp-text-block-content><p className="" style={{textAlign: "center", whiteSpace: "pre-wrap"} as any} data-rte-preserve-empty="true">Email Address: sales@elsewhere-eg.net</p></div>


  
<style id="container-styles" dangerouslySetInnerHTML={{ __html: `#block-f3bbea4717b8aea17eb0 {
    
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

<style id="override-container-styles" dangerouslySetInnerHTML={{ __html: `
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
<style className="transform-overrides-vars" dangerouslySetInnerHTML={{ __html: `
  
` }} />




</div>
</div></div></div><div className="fe-block fe-block-4f22a70a191b549d3759"><div className="sqs-block website-component-block sqs-block-website-component sqs-block-html html-block" data-block-css="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.styles.css&quot;]" data-block-scripts="[&quot;https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.html/31b4e3a9-f074-411d-ae8f-0cd820aa59c6_811/website.components.html.visitor.js&quot;]" data-block-type="1337" data-definition-name="website.components.html" data-sqsp-block="text" data-website-component-id="4f22a70a191b549d3759" id="block-4f22a70a191b549d3759"><div className="sqs-block-content"><div className="sqs-text-block-container">
  
  <div className="sqs-html-content" data-sqsp-text-block-content><p className="sqsrte-small" style={{textAlign: "center", whiteSpace: "pre-wrap"} as any} data-rte-preserve-empty="true">© Copyright elsewhere 2026</p></div>


  
<style id="container-styles" dangerouslySetInnerHTML={{ __html: `#block-4f22a70a191b549d3759 {
    
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

<style id="override-container-styles" dangerouslySetInnerHTML={{ __html: `
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
<style className="transform-overrides-vars" dangerouslySetInnerHTML={{ __html: `
  
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
export default Contact;
