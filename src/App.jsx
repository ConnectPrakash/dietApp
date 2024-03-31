import React from 'react'
import './App.css'



function App() {
  return (
    <div> 
      <header className="header">

        <a href='#' className='logo'>diet</a>

        <nav className='navbar'>
          <a href='#home'>Home</a>
          <a href='#about'>about</a>
          <a href='#services'>Services</a>
          <a href='#diet'>diet</a>
          <a href='#pricing'>Pricing</a>
          <a href='#reviews'>Review</a>

        </nav>

        <div className='fas fa-bars' id='menu'></div>
      </header>
       <section className='home' id='home'>

        <div className='content'>
          <h3>Welcome to the place full of healthy food</h3>
          <a href='#' className='btn'>read more</a>
        </div>
      </section> 

      <section className="about" id='about'>

        <h1 className='heading'>
          about us
    
        </h1>
        <div className='row'>
          <div className='content'>
            <h3>my mission is to give you a guideline for your health.</h3>
            <p> You need to begin thinking of food in terms of the amount of macronutrients—protein, carbs, and fat— it provides, and try to keep track of the foods you get those nutrients from (more on this below).

Your protein needs should come from chicken breasts; whole eggs (and egg whites, for pure protein); lean cuts of beef; fish; turkey; and protein powder. Your carbohydrates can come from potatoes, sweet potatoes, rice (white or brown), oats, fruits, and vegetables.

As for fat, most of it will come as a by-product of your protein foods, but you can also derive fat from avocados, nuts, nut butters, seeds, and a small amount of oil such as coconut or olive. </p>
            <a href='#' className='btn'>read more</a>
          </div>

          <div className='image'>
            <img src='../src/assets/Red-Apple-Fruit-PNG-High-Quality-Image.png' alt='default image'></img>
          </div>
        </div>
      </section>
       
       <section className='services' id='services'>

        <h1 className='heading'> Our servicess</h1>

        <div className="box-container">

                <div className="box">
                  <div className="icon">

                    <img src='../src/assets/young-medical-student_144627-9951.jpg' alt=''/>
                  </div>

                  <div className="content">

                    <h3>Nutritional Counseling: </h3>
                    <div className="line"></div>
                    <p> Guidance from nutrition experts or dietitians who provide education on healthy eating habits, portion control, food choices, and nutrient intake.</p>
                    <ul>
                      <li><i className='fas fa-check'></i> Healthy Eating Habits</li>
                      <li><i className='fas fa-check'></i>Portion Control</li>
                      <li><i className='fas fa-check'></i>Food Choices</li>
                      <li><i className='fas fa-check'></i>Meal Planning</li>
                    </ul>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">

                    <img src='../src/assets/this-is-my-help-environment_329181-9688.jpg' alt=''/>
                  </div>

                  <div className="content">

                    <h3>Personalized Meal Plans</h3>
                    <div className="line"></div>
                    <p> Tailored diet plans based on individual preferences, dietary restrictions, health goals, and lifestyle factors.</p>
                    <ul>
                      <li><i className='fas fa-check'></i>Individual Preferences</li>
                      <li><i className='fas fa-check'></i>Dietary Restrictions</li>
                      <li><i className='fas fa-check'></i>Lifestyle Factors</li>
                      <li><i className='fas fa-check'></i>Nutritional Balance</li>
                    </ul>
                  </div>
                </div>
                <div className="box">
                  <div className="icon">

                    <img src='../src/assets/front-view-female-courier-yellow-shirt-yellow-cap-smiling-holding-bowls-with-food-paper-white_140725-19735.jpg' alt=''/>
                  </div>

                  <div className="content">

                    <h3>Food Tracking and Monitoring</h3>
                    <div className="line"></div>
                    <p>Tools or apps for tracking food intake, calorie counting, and monitoring nutritional values to ensure compliance with the diet plan.</p>
                    <ul>
                      <li><i className='fas fa-check'></i> Food Diary Apps</li>
                      <li><i className='fas fa-check'></i>Calorie Counting</li>
                      <li><i className='fas fa-check'></i>Progress Tracking</li>
                    </ul>
                  </div>
                </div>


        </div>
       </section>

       <section className='diet' id='diet'>

        <h1 className='heading'>diet Plan</h1>

        <ul className='controls'>
          <li className='buttons active' data-filter='all'>
            <img src="" alt="" />
            <h3>all</h3>
          </li>
          <li className='buttons' data-filter='breakfast'>
            <img src="../src/assets/breakfast-with-coffee-fresh-croissants_2829-17554.jpg" alt="" />
            <h3>breakfast</h3>
          </li>
          <li className='buttons' data-filter='lunch'>
            <img src="../src/assets/traditional-south-indian-meal-food-served-big-banana-leaf-food-platter-complete-thali-selective-focus_466689-50746.jpg" alt="" />
            <h3>lunch</h3>
          </li>
          <li className='buttons' data-filter='dinner'>
            <img src="../src/assets/high-angle-indian-food-assortment_23-2148747704.avif" alt="" />
            <h3>dinner</h3>
          </li>
          
          
        </ul>
        <div className="image-container">
          <div className="box lunch">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box dinner">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box breakfast">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box breakfast">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box lunch">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box dinner">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box dinner">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box dinner">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          <div className="box dinner">
            <div className="image">
              <img src='' alt=''/>
            </div>
            <div className="content">
              <a href='#' className='link'>...</a>
              <p>...</p>
              <div className="icon">
                <a href='#'><i className='fas fa-clock'></i>11 june,2023</a>
                <a href='#'><i className='fas fa-user'></i>by admin</a>

              </div>
            </div>
          </div>
          
        </div>
       </section>
       <section className='pricing' id='pricing'>

        <h1 className="heading">Pricing plan</h1>

        <div className="box-container">

          <div className="box active">

            <h3 className="title">basic</h3>

            <div className="price">

              <span className='currency'>$</span>
              <span className='amount'>30</span>
              <span className='duration'>/year</span>
            </div>

            <ul><i className='fas fa-check'>nutrition plan</i>
            <i className='fas fa-check'>training plan</i>
            <i className='fas fa-check'>body measurement</i>
            </ul>

            <p>30 days consutation</p>
            <p>3 personal meetings</p>
            <p>$20 access to additional materials</p>
            <a href='#' className='btn'>read more</a>
          </div>

          <div className="box active">

<h3 className="title">Standard</h3>

<div className="price">

  <span className='currency'>$</span>
  <span className='amount'>60</span>
  <span className='duration'>/year</span>
</div>

<ul><i className='fas fa-check'>nutrition plan</i>
<i className='fas fa-check'>training plan</i>
<i className='fas fa-check'>body measurement</i>
</ul>

<p>60 days consutation</p>
<p>10 personal meetings</p>
<p>free access to additional materials</p>
<a href='#' className='btn'>read more</a>
</div>
<div className="box active">

<h3 className="title">Premium</h3>

<div className="price">

  <span className='currency'>$</span>
  <span className='amount'>90</span>
  <span className='duration'>/year</span>
</div>

<ul><i className='fas fa-check'>nutrition plan</i>
<i className='fas fa-check'>training plan</i>
<i className='fas fa-check'>body measurement</i>
</ul>

<p>90 days consutation</p>
<p>15 personal meetings</p>
<p>free access to additional materials</p>
<a href='#' className='btn'>read more</a>
</div>
        </div>
       </section>
      <section className="reviews" id="reviews">

        <h1 className="heading">client\'s reviews</h1>

        <div className='swiper review-slider'>

          <div className="swiper-wrapper">

            <div className="swiper-slide slide">

              <p>....</p>
              <div className="user">
                <img src='' alt=''/>
                <div className='info'>

                  <h3>
                    John deo

                  </h3>
                  <span>client</span>
                </div>
              </div>
            </div>
             <div className="swiper-slide slide">

              <p>....</p>
              <div className="user">
                <img src='' alt=''/>
                <div className='info'>
              
                  <h3>
                    John deo
              
                  </h3>
                  <span>client</span>
                </div>
              </div>
            </div>
            <div className="swiper-slide slide">
            
              <p>....</p>
              <div className="user">
                <img src='' alt=''/>
                <div className='info'>
              
                  <h3>
                    John deo
              
                  </h3>
                  <span>client</span>
                </div>
              </div>
            </div>
<div className="swiper-slide slide">

<p>....</p>
<div className="user">
  <img src='' alt=''/>
  <div className='info'>

    <h3>
      John deo

    </h3>
    <span>client</span>
  </div>
</div>
</div>
<div className="swiper-slide slide">

<p>....</p>
<div className="user">
  <img src='' alt=''/>
  <div className='info'>

    <h3>
      John deo

    </h3>
    <span>client</span>
  </div>
</div>
</div>
<div className="swiper-slide slide">

<p>....</p>
<div className="user">
  <img src='' alt=''/>
  <div className='info'>

    <h3>
      John deo

    </h3>
    <span>client</span>
  </div>
</div>
</div>
          </div>
        </div>
      </section>
      <section className="newsletter">

        <div className="content">
          <h1 className="heading">subscribe now</h1>
          <p>.....</p>
          <form action=''>
            <input type='email' placeholder='enter your email' className='email'/>
            <input type="submit" value="subscribe" className='btn' />
          </form>
        </div>
      </section>
      <section className='footer'>

        <div className="box-container">

          <div className="box">
            <h3>quick links</h3>
            <a href='#home'> <i className='fas fa-arrow-right'></i>home</a>
            <a href='#about'> <i className='fas fa-arrow-right'></i>about</a>
            <a href='#services'> <i className='fas fa-arrow-right'></i>services</a>
            <a href='#diet'> <i className='fas fa-arrow-right'></i>diet</a>
            <a href='#blog'> <i className='fas fa-arrow-right'></i>blog</a>
            <a href='#reviews'> <i className='fas fa-arrow-right'></i>reviews</a>
          </div>

          <div className="box">
            <h3>extra links</h3>
            <a href='#'> <i className='fas fa-arrow-right'></i>my account</a>
            <a href='#'> <i className='fas fa-arrow-right'></i>my order</a>
            <a href='#'> <i className='fas fa-arrow-right'></i>my wishlist</a>
            <a href='#'> <i className='fas fa-arrow-right'></i>ask questions</a>
            <a href='#'> <i className='fas fa-arrow-right'></i>terms of use</a>
            <a href='#'> <i className='fas fa-arrow-right'></i>privacy policy</a>
          </div>

          <div className="box">
            <h3>contact info</h3>
            <a href='#'> <i className='fas fa-phone'></i>+123-456-7890</a>
            <a href='#'> <i className='fas fa-phone'></i>+123-789-456</a>
            <a href='#'> <i className='fas fa-envelope'></i>pp3662504@gmail.com</a>
            <a href='#'> <i className='fas fa-map'></i>karachi, pak -12233</a>
         
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href='#'> <i className='fas fa-facebook-f'></i>facebook</a>
            <a href='#'> <i className='fas fa-twitter'></i>twitter</a>
            <a href='#'> <i className='fas fa-instagram'></i>instagram</a>
            <a href='#'> <i className='fas fa-linkedin'></i>linkedin</a>
            <a href='#'> <i className='fas fa-github'></i>github</a>
         
          </div>
        </div>

        <div className='credit'>created by <span>Prakash</span> |all rights are reserved!</div>
      </section>
    </div>
  )
}

export default App
