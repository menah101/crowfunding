import React from 'react'
import CampaignImage from './parts/CampaignImage'
import CampaignCategory from './parts/CampaignCategory'
import CampaignTitle from './parts/CampaignTitle'
import CampaignDesc from './parts/CampaignDesc'
import CampaignMeta from "./parts/CampaignMeta";

const CampaignFeature = () => {
  return (
    <div className='flex items-center gap-x-[30px] w-full max-w-[1048px]'>
      <CampaignImage className='h-[266px] flex-1' />
      <div className='flex-1 max-w-[435px]'>
        <CampaignCategory text='Architecture' className="mb-4 text-sm"/>
        <CampaignTitle className='font-bold mb-4 text-xl'>
          Adventure is dangerous, try routine
        </CampaignTitle>
        <CampaignDesc className='text-sm mb-6'>
          I am fortunate to have been a part of an amazing company and have done some amazing things.
        </CampaignDesc>
        <div className='w-full h-[5px] rounded-full bg-[#EFEFEF]'>
          <div className='h-full w-2/4 rounded-full bg-primary'></div>
        </div>
        <div className="flex items-start justify-between gap-x-5 mt-5">
          <CampaignMeta size='big' amount="$2,000" text="Raised of $2,000" />
          <CampaignMeta size='big' amount="173" text="Total backers" />
          <CampaignMeta size='big' amount="30" text="Day left" />
        </div>
      </div>
    </div>
  )
}

export default CampaignFeature