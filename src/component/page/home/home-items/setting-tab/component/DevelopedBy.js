import React from 'react'
import SettingGrid from './SettingGrid'
import SettingTitle from './SettingTitle'
import { IconGenerate } from '../../ItemsExport'

function DevelopedBy() {
  return (
    <div id="_developedByHolder">
      <div className='row'>
        <SettingGrid col="3" >
          <SettingTitle title="Developed By" />
        </SettingGrid>
        <SettingGrid col="9" >
          <h3> Hasan Murat Özcevahir - Fullstack Developer</h3>
        </SettingGrid>

      </div>

      <h6 >Contact: <a href="https://www.muratozcevahir.com/">Personal website</a> | <a href="https://www.instagram.com/clgn_kdi/" target='_blanknpm'> <i className="bi bi-instagram"></i>Instagram</a></h6>

    </div>
  )
}

export default DevelopedBy