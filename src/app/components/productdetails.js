"use-client"
import React from 'react'
import Image from 'next/image'
import { GoHeart } from "react-icons/go";
import { FiPlus } from "react-icons/fi";

import Tableoptions from './tableoptions'
const productdetails = () => {
  return (
    <div className='lg:p-[2rem] w-full'>
        <div className='lg:w-full lg:h-[42.448rem] md:flex  justify-center relative '>
            <div className='w-1/2 relative bg-[#F8F6F4] flex justify-center items-center rounded-md'>
            <Tableoptions />
            <div className="relative w-[80%] h-[80%]">
            <Image
            src="/images/product/table.png"
             alt="table"
            layout="fill"
            objectFit="contain" 
            />
            </div>
            </div>
            <div className='w-1/2 h-full lg:m-3 md:m-2 m-1 font-Geist'>
            <div className=" mx-auto    rounded-md">
            <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium text-gray-800 ">
                Cheese – appareil à raclette 1/2 roue
            </h1>
        <GoHeart className='text-3xl text-slate-400'/>
      </div>
      <p className="mt-2 text-xl text-gray-700">39,50€  <span className='text-slate-500'>/ pièce</span></p>
      <div className="mt-4 flex justify-between items-center space-x-6 text-gray-600">
        <div className='flex items-center gap-x-2'>
        <div className="flex items-center space-x-1 ">
          <span className='relative lg:w-[1.3rem] lg:h-[1.3rem] md:w-[1rem] md:h-[1rem] w-[0.8rem] h-[0.8rem]  '>
          <Image src={'/icons/scale.svg'} alt="scale"
          className='absolute'
            layout="fill"
            objectFit="contain"/>
            </span>
          <span className="lg:text-[1.2rem] md:text-[1rem] text-[0.8rem]">20<sup className='lg:text-[0.8rem] md:text-[0.7rem] text-[0.5rem]'>cm</sup></span>
        </div>
        <div className="flex items-center space-x-1 ">
          <span className='relative lg:w-[1.3rem] lg:h-[1.3rem] md:w-[1rem] md:h-[1rem] w-[0.8rem] h-[0.8rem]  '>
          <Image src={'/icons/circleDiag.svg'} alt="circleDiag"
          className='absolute'
            layout="fill"
            objectFit="contain"/>
            </span>
          <span className="lg:text-[1.2rem] md:text-[1rem] text-[0.8rem]">50<sup className='lg:text-[0.8rem] md:text-[0.7rem] text-[0.5rem]'>cm</sup></span>
        </div>
        </div>
        <span className="lg:text-[1rem] md:text-[0.8rem] text-[0.6rem]">Réf : VABGN5</span>
      </div>
      <div className="mt-4 text-slate-600  lg:text-[1rem] md:text-[0.8rem] text-[0.6rem]">
        <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue</p>
        <p>Réglable en hauteur</p>
        <p>Appareil à raclette professionnel</p>
        <p>Boîtier de chauffe horizontal réglable en hauteur</p>
        <div className='mt-4'>
        <p>220V</p>
        <p>900W</p>
        </div>
        
      </div>
      <div className="mt-[15rem]  flex w-full items-center gap-x-2 justify-between">
        <div className="flex w-[25%] items-center border border-gray-300 rounded">
          <button className="px-3 w-[30%] py-1 lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] font-medium text-gray-700 hover:bg-gray-200">
            -
          </button>
          <span className="px-4 py-1 w-[30%] lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] text-gray-700">1</span>
          <button className="px-3 w-[30%] py-1 lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] font-medium text-gray-700 hover:bg-gray-200">
            +
          </button>
        </div>
        <button className="px-6 w-[75%] py-2 bg-[#5CD2DD] lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] text-white rounded-sm hover:bg-teal-500">
          AJOUTER AU PANIER
        </button>
      </div>
    </div>

            </div>
        </div>
      <div className='w-full md:flex md:justify-center md:flex-row flex-col items-center '>
        <div className='w-1/2 lg:p-3 md:p-2 p-1'>
        <p className='lg:text-[1rem] md:text-[0.8rem] text-[0.6rem] text-gray-800 '>Description produit</p>
        <p className='w-[90%] lg:text-[0.8rem] md:text-[0.7rem] text-[0.4rem] text-slate-400'>Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
        </div>
        <div className='w-1/2 lg:px-2 md:px-1'>
        <p className='w-full lg:h-[4.036rem] bg-[#FBF9F8] flex justify-between items-center lg:px-3 '><span>Livraisons</span><span><FiPlus/></span> </p>
        <p className='w-full lg:h-[4.036rem] bg-[#FBF9F8] flex justify-between items-center lg:px-3 '><span>Questions</span><span><FiPlus/></span> </p>
        </div>
      </div>
    </div>
  )
}

export default productdetails
