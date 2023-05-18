import React from 'react'

function Updates(prop) {
    return (
        <div className='col-12 col-lg-6'>
            <div id="_updatesHolder">
                <h5 className='infoTitle' style={{backgroundColor: `rgb(${prop.titleColor})`}}>Updates</h5>
                <ul>
                    <li>Phasellus scelerisque leo sit amet ullamcorper consequat. Suspendisse ac orci quis lectus commodo ullamcorper. Vestibulum.

                    </li>
                    <li>Nullam at turpis eleifend, egestas tortor ut, maximus risus. Praesent vitae congue elit. Nunc consectetur.

                    </li>
                    <li>Phasellus eleifend pellentesque tellus in tincidunt. Proin tristique odio nunc, non sodales tellus gravida mollis.

                    </li>
                    <li>Suspendisse scelerisque, nibh et condimentum aliquet, massa orci elementum arcu, et malesuada libero leo quis.

                    </li>
                    <li>Nullam et tellus eu dolor rutrum commodo in vitae lectus. Suspendisse mollis magna ac massa.
                    </li>
                    <li>Pellentesque fringilla efficitur velit, ut facilisis nisi porta a. Class aptent taciti sociosqu ad litora.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Updates