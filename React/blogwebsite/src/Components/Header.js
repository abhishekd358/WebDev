import React from 'react'

export default function Header(props) {
  return (
    <div>
        <header class="masthead" style={{backgroundImage: `url(assets/img/${props.img})`}}>
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="site-heading">
                            <h1>{props.title}</h1>
                            <span class="subheading">Home</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
  )
}
