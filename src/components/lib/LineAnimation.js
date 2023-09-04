import React from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' }

export const LineAnimation = () => {
  const isTablet = useMediaQuery({ minWidth: 774, maxWidth: 1280 })
  return (
    <div style={{ position: 'absolute', top: isTablet ? 'auto' : '0px', bottom: !isTablet ? 'auto' : '0px', right: '0px', zIndex: '999' }}>
      <svg width="1247" viewBox="0 0 1247 1013" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1070_471)">
          <motion.path
            d="M164.8 -15.9004C166.5 -13.3004 168.2 -10.6004 169.8 -7.90039C206.3 55.4996 180.6 118.7 244.3 182.8C283.3 222 354.2 256.3 429.7 255.1C499.7 254 531 210 588.9 230.3C592.3 231.5 629.9 245.3 649.7 281.7C679.1 335.6 637 379.3 665.1 419.1C685.5 448 732 459.8 766.1 450C820.1 434.4 819.5 373.5 862.8 367.3C904.8 361.3 961.7 407.6 967.9 464C971.6 498.1 956.9 535.8 928.6 557.9C875.5 599.4 816.1 553.3 770.2 592.9C740 619.1 731 669.2 745 709.4C760.7 754.3 805.6 787.8 845.9 785.1C881.1 782.8 887 754.7 946.8 708C993.2 671.8 1054.1 623.5 1110.8 639.3C1144.6 648.7 1172.9 679.8 1180.9 713.6C1190.4 754.2 1168.2 789.3 1154.5 811C1113 876.6 1064.8 874.2 1043.5 922.4C1033.4 945.3 1027.8 982.8 1056.1 1044.4C1064.7 1061.2 1073.3 1078 1082 1094.8"
            fill="transparent"
            strokeWidth="50"
            stroke="#FEBFCB"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition} />
          <motion.path
            d="M185.4 3.7l.7 1.9-10.6 9.4c-.8.7-1.7 1.4-2.8 2.3 1.4-.1 2.8-.1 3.6-.1l14.1.1.7 1.8-20.3-.1-.7-1.9 15.3-13.4zm-11.7 23.8l18.3-5.1 3 11-1.7.5-2.5-9.1-6.6 1.8 2.3 8.3-1.7.5-2.3-8.3-6.7 1.9 2.5 9.1-1.7.5-2.9-11.1zm3.8 14.2l18.6-3.9 1.5 6.9c.8 3.8-.8 6.5-4.1 7.2-2.7.6-4.8-.4-6-2.7l-7.2 5.7-.4-2.1 6.9-5.4-1.2-5.4-7.7 1.6-.4-1.9zm9.9-.1l1.1 5.1c.5 2.6 2.3 3.8 4.6 3.3 2.4-.5 3.4-2.4 2.9-4.9l-1.1-5.1-7.5 1.6zm-6.9 14.6l20 3.6.4 2.3-17.5 10.3-.3-2 4.7-2.7-1.5-8.6-5.3-1-.5-1.9zm7.4 3.1l1.3 7.5 8.9-5.2c.2-.1.5-.3.7-.4-.2 0-.5 0-.8-.1l-10.1-1.8zm17.2 24.6c.6 3.4-.8 5.9-3.9 6.8l-.4-1.9c2.1-.6 3-2.3 2.6-4.6-.5-2.6-2.2-4.1-4.3-3.7-1.6.3-2.5 1.5-2.6 3.5l-.2 3.4c-.2 3.1-1.5 4.9-4.1 5.4-3.2.6-5.8-1.5-6.5-5.4-.7-3.6.8-6.4 3.8-7.3l.4 1.9c-1.9.5-2.9 2.4-2.4 5 .5 2.7 2.2 4.2 4.3 3.8 1.7-.3 2.6-1.5 2.7-3.6l.2-3.3c.2-3.1 1.5-4.9 4.1-5.4 3.1-.5 5.6 1.6 6.3 5.4zm-11.6 10.5l.4 1.8-.7.2c-2.2.5-3.4 2-2.9 4.3.5 2.4 2.3 3.1 4.5 2.6l13.4-3.1.4 1.9-13.5 3.1c-3.4.8-5.9-.9-6.6-4.1-.8-3.3 1-5.8 4.2-6.5l.8-.2zm16 11.3l.6 1.8-11.8 3.6c-3.2 1-4.4 3.3-3.4 6.4 1 3.1 3.3 4.3 6.4 3.3l11.8-3.6.6 1.8-11.9 3.6c-4.1 1.3-7.4-.5-8.7-4.6-1.3-4.2.4-7.5 4.6-8.8l11.8-3.5zm-12.2 24.2l17.5-7.5.8 1.8-10.4 15.8 14.6-6.3.7 1.7L203 143l-.7-1.7 10.4-15.9-14.6 6.3-.8-1.8zm8.3 18.4l16.4-9.6 1 1.7-8.4 17 13.7-8 1 1.6-16.4 9.6-1-1.6 8.4-17.1-13.7 8-1-1.6zm10.5 17l15.3-11.4 6.8 9.1-1.4 1-5.7-7.6-5.5 4.1 5.1 6.9-1.4 1-5.1-6.9-5.6 4.1 5.7 7.6-1.4 1-6.8-8.9zm27.8 3.7c2.3 2.6 2.4 5.5.2 7.9l-1.3-1.4c1.5-1.6 1.4-3.5-.2-5.3-1.8-2-4-2.4-5.6-.9-1.2 1.1-1.4 2.6-.4 4.4l1.6 3c1.5 2.7 1.2 5-.7 6.7-2.5 2.2-5.7 1.7-8.3-1.2-2.5-2.8-2.7-5.9-.5-8.2l1.3 1.5c-1.4 1.4-1.2 3.6.5 5.5 1.9 2.1 4.1 2.5 5.7 1 1.3-1.1 1.5-2.6.5-4.4l-1.6-2.9c-1.5-2.7-1.2-5 .7-6.7 2.2-2.3 5.5-1.8 8.1 1zm9.9 10.2c2.5 2.4 2.8 5.3.8 7.8l-1.4-1.3c1.3-1.7 1.1-3.6-.6-5.2-1.9-1.8-4.2-2.1-5.7-.5-1.2 1.2-1.2 2.7-.1 4.4l1.8 2.8c1.7 2.6 1.6 4.9-.2 6.7-2.3 2.4-5.6 2.2-8.4-.5-2.7-2.5-3.2-5.7-1.2-8.1l1.4 1.4c-1.3 1.5-.9 3.7 1 5.5 2 1.9 4.3 2.2 5.8.6 1.2-1.2 1.2-2.7.1-4.5l-1.8-2.8c-1.7-2.6-1.6-4.9.2-6.8 2.2-2.3 5.5-2.1 8.3.5zm.4 26.4c-4.2-3.3-4.6-8.8-1-13.3 3.6-4.5 9.1-5.4 13.2-2.1 4.2 3.3 4.6 8.8 1 13.4-3.6 4.5-9.1 5.3-13.2 2zm11.1-14c-3.3-2.6-7.6-1.9-10.5 1.9-3 3.7-2.7 8.1.6 10.7 3.3 2.6 7.6 1.9 10.5-1.8 2.9-3.8 2.7-8.1-.6-10.8zm-.3 21.9l10.5-15.8 1.6 1.1-.1 19 8.8-13.2 1.6 1-10.5 15.8-1.6-1v-19l-8.8 13.2-1.5-1.1zm28 9.2l-3.3 6.2-1.7-.9 9-16.8 6.4 3.4c3.2 1.7 4.1 4.9 2.5 8.1-1.6 3-4.9 4.2-8.1 2.5l-4.8-2.5zm4.9-9.1l-4.1 7.6 4.4 2.3c2.4 1.3 4.7.5 5.9-1.8 1.2-2.3.6-4.5-1.8-5.7l-4.4-2.4zm12.2 25.8c-4.9-2.2-6.6-7.4-4.2-12.7 2.4-5.3 7.5-7.4 12.3-5.2 4.9 2.2 6.6 7.4 4.2 12.7-2.3 5.2-7.4 7.4-12.3 5.2zm7.4-16.2c-3.8-1.7-7.8 0-9.7 4.4-2 4.3-.7 8.5 3.1 10.2 3.8 1.7 7.8-.1 9.8-4.4 1.9-4.4.6-8.5-3.2-10.2zm4.9 21.1l6.7-17.8 6.6 2.5c3.6 1.4 5.1 4.2 3.9 7.3-1 2.6-3 3.9-5.5 3.6l.9 9.1-2-.7-.9-8.8-5.2-1.9-2.8 7.4-1.7-.7zm5.1-8.3l4.9 1.8c2.5.9 4.4.1 5.3-2.1.9-2.3-.2-4.2-2.6-5.1l-4.9-1.8-2.7 7.2zm14.9-4.5l13 4.1-.5 1.7-5.6-1.8-5.2 16.5-1.8-.6 5.2-16.5-5.6-1.7.5-1.7zm14.3 15.4l-2.1 8.1-1.9-.5 4.7-18.4 10.9 2.8-.4 1.7-9-2.3-1.8 7 7.5 1.9-.4 1.7-7.5-2zM375 260c-5.3-1-8.1-5.7-7.1-11.4 1.1-5.7 5.5-9 10.8-8 5.3 1 8.1 5.7 7.1 11.4-1.1 5.7-5.6 9-10.8 8zm3.3-17.5c-4.1-.8-7.6 1.9-8.4 6.5-.9 4.7 1.3 8.4 5.5 9.2 4.1.8 7.6-1.9 8.5-6.5.8-4.7-1.4-8.5-5.6-9.2zm11.9 17.9l8.7 1.1-.2 1.7-10.6-1.3 2.3-18.9 1.9.2-2.1 17.2zm13.6 3.2l-1.9-.2 1.6-19 1.9.2-1.6 19zm13 1c-5.3-.2-8.9-4.3-8.8-10.1.2-5.8 4.1-9.7 9.4-9.6 5.3.2 8.9 4.3 8.8 10.1-.3 5.8-4.1 9.8-9.4 9.6zm.5-17.8c-4.2-.1-7.2 3-7.3 7.8-.1 4.8 2.6 8.1 6.8 8.2 4.2.1 7.2-3 7.3-7.8.2-4.7-2.6-8.1-6.8-8.2zm18.9 10.4c-.2-2 1.3-3.8 3.4-3.9 2-.2 3.7 1.4 3.9 3.3.2 1.9-1.3 3.7-3.3 3.9-2 .1-3.8-1.4-4-3.3zm14.1-13.5l2-.4 7.7 11.9c.6.9 1.2 1.9 1.9 3.1.1-1.4.3-2.8.4-3.6l2.2-14 1.9-.4-3.2 20.1-2 .4-10.9-17.1zm23.2 14.3l-5.4-18.3 10.9-3.2.5 1.7-9.1 2.7 1.9 6.6 8.2-2.4.5 1.7-8.2 2.4 2 6.7 9.1-2.7.5 1.7-10.9 3.1zm15.2-4.6l-6.4-17.9 6.7-2.4c3.6-1.3 6.5-.1 7.7 3.1.9 2.6.2 4.9-1.9 6.3l6.6 6.4-2 .7-6.3-6.1-5.2 1.9 2.6 7.4-1.8.6zm-1.5-9.8l4.9-1.8c2.5-.9 3.5-2.7 2.6-5-.8-2.3-2.8-3.1-5.3-2.2l-4.9 1.7 2.7 7.3zm15.8 4.6l-.1-20.3 2.2-.8 13.2 15.4-1.9.7-3.5-4.1-8.2 3v5.4l-1.7.7zm1.7-7.8l7.1-2.6-6.7-7.8c-.2-.2-.4-.5-.5-.6 0 .2.1.5 0 .8l.1 10.2zm22.2-20.9c3.3-.9 6 .3 7.1 3.3l-1.9.5c-.8-2-2.5-2.8-4.8-2.2-2.6.7-3.9 2.5-3.3 4.6.4 1.6 1.7 2.4 3.7 2.3l3.4-.1c3.1-.1 5 1.1 5.7 3.6.9 3.2-1 5.9-4.8 6.9-3.6 1-6.5-.2-7.5-3.1l1.9-.5c.6 1.9 2.7 2.7 5.2 2 2.7-.7 4-2.5 3.5-4.6-.5-1.6-1.7-2.5-3.8-2.4l-3.3.1c-3.1.1-5-1.1-5.7-3.6-.9-3.1 1-5.8 4.6-6.8zm11 10.8l1.8-.3.1.7c.3 2.2 1.8 3.5 4.1 3.2 2.4-.4 3.3-2 2.9-4.3l-2.1-13.6 1.9-.3 2.1 13.7c.5 3.4-1.4 5.8-4.5 6.3-3.4.5-5.7-1.4-6.2-4.7l-.1-.7zm14.8-15.2h1.9l-.3 12.3c-.1 3.3 1.7 5.2 5 5.3 3.2.1 5.1-1.7 5.2-5l.3-12.3h1.9l-.3 12.4c-.1 4.3-2.8 6.9-7.1 6.8-4.4-.1-7-2.8-6.9-7.1l.3-12.4zm16.1 19.7l4.4-18.5 1.9.5 6.5 17.9 3.7-15.4 1.8.4-4.4 18.5-1.8-.4-6.5-17.9-3.7 15.4-1.9-.5zm16.5 4.3l8.1-17.2 1.8.8 2.8 18.8 6.7-14.3 1.7.8-8.1 17.2-1.7-.8-2.8-18.8-6.7 14.3-1.8-.8zm15.8 7.8l10.3-16 9.6 6.2-1 1.5-7.9-5.1-3.7 5.8 7.2 4.7-.9 1.5-7.2-4.7-3.8 5.8 8 5.1-1 1.5-9.6-6.3zm28.2-3.7c2.6 2.2 3.1 5.1 1.3 7.8l-1.5-1.2c1.2-1.8.9-3.7-1-5.2-2.1-1.7-4.3-1.8-5.7-.1-1.1 1.3-1 2.7.2 4.4l2 2.7c1.8 2.5 1.9 4.8.3 6.7-2.1 2.5-5.4 2.5-8.4 0-2.8-2.4-3.5-5.5-1.7-8l1.5 1.3c-1.2 1.6-.7 3.7 1.3 5.4 2.1 1.8 4.4 1.9 5.8.2 1.1-1.3 1.1-2.8-.2-4.5l-2-2.7c-1.8-2.5-1.9-4.8-.3-6.8 2.2-2.5 5.5-2.4 8.4 0zm11.8 11.2c2.3 2.5 2.5 5.5.3 7.9l-1.3-1.4c1.4-1.6 1.3-3.5-.3-5.3-1.8-2-4-2.3-5.6-.9-1.2 1.1-1.3 2.6-.4 4.4l1.6 2.9c1.5 2.7 1.3 5-.6 6.7-2.4 2.2-5.7 1.8-8.4-1.1-2.5-2.7-2.8-5.9-.7-8.2l1.3 1.4c-1.4 1.4-1.2 3.6.6 5.5 1.9 2.1 4.1 2.4 5.7 1 1.2-1.2 1.4-2.6.4-4.4l-1.6-2.9c-1.5-2.7-1.3-5 .6-6.7 2.6-2.1 5.8-1.7 8.4 1.1zm-4.6 26c-2.9-4.5-1.5-9.8 3.3-13 4.8-3.1 10.3-2.2 13.2 2.2 2.9 4.5 1.5 9.8-3.3 13-4.9 3.2-10.3 2.2-13.2-2.2zm14.9-9.7c-2.3-3.5-6.6-4.2-10.6-1.6s-5.2 6.8-2.9 10.3c2.3 3.5 6.6 4.2 10.6 1.6 4.1-2.6 5.2-6.8 2.9-10.3zm-9.2 18.5l17.8-6.8.7 1.8-11 15.5 14.8-5.7.7 1.8-17.8 6.8-.7-1.8 11-15.5-14.8 5.7-.7-1.8zm14.2 23.9l-7 .6-.2-1.9 19-1.6.6 7.2c.3 3.7-1.9 6.2-5.5 6.5-3.4.3-6.2-1.8-6.5-5.4l-.4-5.4zm10.2-.9l-8.6.7.4 5c.2 2.8 2.1 4.2 4.7 4 2.6-.2 4.1-2 3.9-4.6l-.4-5.1zm-17.2 22.3c.4-5.3 4.7-8.7 10.5-8.3 5.8.4 9.6 4.5 9.2 9.8-.4 5.3-4.7 8.7-10.5 8.3-5.8-.5-9.6-4.5-9.2-9.8zm17.8 1.3c.3-4.2-2.7-7.3-7.5-7.6-4.7-.3-8.2 2.3-8.5 6.5-.3 4.2 2.7 7.3 7.5 7.7 4.7.2 8.2-2.5 8.5-6.6zm-18.7 10.5l18.8 2.7-1 7c-.6 3.8-3 5.8-6.3 5.3-2.7-.4-4.4-2.1-4.7-4.6l-8.7 2.8.3-2.1 8.4-2.7.8-5.5-7.8-1.1.2-1.8zm9.3 3.2l-.8 5.2c-.4 2.6.8 4.3 3.2 4.7 2.4.4 4-1.1 4.4-3.6l.7-5.1-7.5-1.2zm7.4 13.9l-1.6 13.5-1.7-.2.7-5.8-17.1-2.1.2-1.9 17.1 2.1.7-5.8 1.7.2zm-12.5 16.9l-8.4-.1v-1.9l19 .3-.2 11.2h-1.8l.1-9.3-7.2-.1-.1 7.8h-1.7l.3-7.9zM646 403c-1.3-5.2 1.8-9.8 7.4-11.2 5.6-1.4 10.5 1.3 11.7 6.4 1.3 5.2-1.8 9.8-7.4 11.2-5.5 1.4-10.4-1.3-11.7-6.4zm17.4-4.3c-1-4.1-4.8-6.1-9.5-4.9-4.6 1.1-7.1 4.7-6.1 8.8 1 4.1 4.9 6.1 9.5 5 4.6-1.3 7.1-4.8 6.1-8.9zm-9.1 19.4l4.6 7.4-1.5.9-5.7-9 16.1-10.1 1 1.6-14.5 9.2zm7.4 13.1l-1.3-1.4 14.3-12.6 1.3 1.4-14.3 12.6zm10.4 10c-4.2-3.3-4.7-8.8-1.2-13.3 3.5-4.6 9-5.5 13.2-2.3 4.2 3.3 4.7 8.8 1.2 13.3-3.6 4.6-9 5.5-13.2 2.3zM683 427c-3.3-2.6-7.6-1.7-10.5 2-2.9 3.8-2.6 8.1.7 10.7 3.3 2.6 7.6 1.7 10.5-2 2.9-3.8 2.6-8.1-.7-10.7zm10.3 18.5c.8-1.8 2.9-2.7 4.8-1.9 1.8.8 2.7 3 1.9 4.8-.8 1.8-2.9 2.7-4.7 1.9-1.9-.8-2.8-3-2-4.8zm18.1-5.7l2 .4 2.3 14c.2 1.1.3 2.2.5 3.6.7-1.3 1.4-2.5 1.8-3.1l7.6-11.9 1.9.4-11 17.2-2-.4-3.1-20.2zm16.2 22.3l1.1-19 11.4.7-.1 1.8-9.4-.5-.4 6.8 8.6.5-.1 1.7-8.6-.5-.4 6.9 9.5.5-.1 1.8-11.5-.7zm16.8.6l-1.9-18.9 7.1-.7c3.8-.4 6.4 1.5 6.7 4.9.3 2.7-1 4.8-3.3 5.7l4.9 7.8-2.1.2-4.7-7.5-5.5.6.8 7.9h-2zm1-9.8l5.2-.5c2.6-.3 4-1.8 3.8-4.3-.2-2.5-2-3.6-4.6-3.4l-5.2.5.8 7.7zm15.9 7.9l1-20.3 2.3-.7L777 456l-1.9.6-3.3-4.3-8.4 2.6-.3 5.4-1.8.5zm2.2-7.7l7.2-2.2-6.3-8.1c-.2-.2-.4-.5-.5-.7v.8l-.4 10.2zm18.2-22.1c2.8-2 5.7-1.7 7.8.7l-1.6 1.1c-1.4-1.6-3.3-1.8-5.3-.4-2.2 1.6-2.8 3.7-1.6 5.5 1 1.4 2.4 1.7 4.3.9l3.1-1.2c2.8-1.1 5.1-.6 6.6 1.5 1.9 2.7 1 5.9-2.2 8.2-3 2.1-6.2 2-8.2-.4l1.6-1.1c1.2 1.6 3.4 1.6 5.5.1 2.3-1.6 2.9-3.8 1.7-5.5-1-1.4-2.4-1.7-4.4-1l-3.1 1.2c-2.8 1.1-5.1.7-6.6-1.5-1.6-2.7-.8-5.9 2.4-8.1zm14.6 5.6l1.3-1.3.5.5c1.6 1.6 3.5 1.8 5.2.1 1.7-1.7 1.4-3.6-.2-5.2l-9.8-9.7 1.3-1.4 9.9 9.7c2.5 2.4 2.4 5.5.1 7.8-2.4 2.4-5.4 2.3-7.7-.1l-.6-.4zm.4-19.2l1.1-1.5 9.9 7.4c2.7 2 5.2 1.6 7.2-1 1.9-2.6 1.5-5.2-1.1-7.2l-9.9-7.4 1.1-1.5 9.9 7.4c3.4 2.6 4 6.3 1.4 9.8-2.6 3.5-6.3 4.1-9.8 1.5l-9.8-7.5zm26.4-4l-15.8-10.6 1.1-1.6 19 .1-13.2-8.8 1-1.6 15.8 10.6-1 1.6-19-.1 13.2 8.8-1.1 1.6zm10-15.1l-14.8-12 1.2-1.5 18.9 1.9-12.3-10 1.2-1.5 14.8 12-1.2 1.5-18.9-1.8 12.3 10-1.2 1.4zm10.6-12.7l-11.1-15.4 9.2-6.7 1 1.4-7.7 5.5 4 5.6 7-5 1 1.4-7 5 4.1 5.6 7.7-5.6 1 1.4-9.2 6.8zm9.7-26.9c3.3-.9 6 .3 7.1 3.3l-1.9.5c-.8-2-2.5-2.8-4.8-2.2-2.6.7-3.9 2.5-3.3 4.6.5 1.6 1.7 2.4 3.7 2.3l3.4-.1c3.1-.1 5 1.1 5.7 3.6.9 3.2-1 5.9-4.8 6.9-3.6 1-6.5-.2-7.6-3.1l1.9-.5c.6 1.9 2.7 2.7 5.2 2 2.7-.8 4-2.5 3.5-4.6-.5-1.6-1.7-2.5-3.8-2.4l-3.3.1c-3.1.1-5-1.1-5.7-3.6-.9-3 1-5.8 4.7-6.8zm17.7-2c3.4.1 5.6 2.1 5.8 5.3l-1.9-.1c-.2-2.2-1.6-3.4-4-3.5-2.7-.1-4.5 1.3-4.5 3.4 0 1.7.9 2.8 2.9 3.3l3.2.9c3 .8 4.5 2.5 4.4 5.1-.1 3.3-2.7 5.3-6.6 5.2-3.7-.1-6.1-2.1-6.3-5.2l2 .1c.1 2 1.8 3.3 4.4 3.4 2.8.1 4.6-1.2 4.7-3.4 0-1.7-.9-2.8-2.9-3.4l-3.2-.9c-3-.8-4.5-2.5-4.4-5.1 0-3.2 2.6-5.3 6.4-5.1zm14.3 22.1c-5.1-1.5-7.6-6.4-5.9-12 1.6-5.5 6.4-8.4 11.5-6.9s7.6 6.4 5.9 12c-1.6 5.5-6.4 8.4-11.5 6.9zm5-17.1c-4-1.2-7.7 1.1-9 5.7-1.3 4.6.5 8.5 4.5 9.7 4 1.2 7.7-1.1 9.1-5.7 1.3-4.6-.5-8.5-4.6-9.7zm5.1 20.2l9.1-16.7 1.7.9L908 385l7.6-13.9 1.7.9-9.1 16.7-1.7-.9-1.7-18.9-7.6 13.9-1.7-.9zm26.7 8.7l-4.6 5.3-1.4-1.3 12.5-14.4 5.5 4.8c2.8 2.4 2.9 5.7.6 8.4-2.3 2.6-5.7 3-8.5.7l-4.1-3.5zm6.8-7.8l-5.6 6.5 3.8 3.3c2.1 1.8 4.4 1.5 6.2-.4 1.7-2 1.5-4.3-.4-6l-4-3.4zm3.3 27.8c-3.5-4.1-2.8-9.5 1.5-13.3 4.4-3.8 9.9-3.6 13.4.4 3.5 4.1 2.8 9.5-1.6 13.3-4.3 3.9-9.8 3.7-13.3-.4zm13.5-11.6c-2.7-3.2-7.1-3.2-10.7-.1-3.6 3.1-4.2 7.4-1.5 10.6 2.7 3.2 7.1 3.2 10.7.2 3.7-3.2 4.3-7.5 1.5-10.7zm-6.3 20.1l16.1-10.1 3.8 6c2 3.3 1.5 6.4-1.4 8.2-2.3 1.5-4.7 1.2-6.6-.5l-4.8 7.8-1.1-1.8 4.6-7.5-2.9-4.7-6.7 4.2-1-1.6zm9.2-3.5l2.8 4.4c1.4 2.2 3.4 2.8 5.5 1.5 2.1-1.3 2.4-3.4 1-5.6l-2.8-4.4-6.5 4.1zm15.3 7.1l5.6 12.4-1.6.7-2.4-5.3-15.7 7.1-.8-1.7 15.7-7.1-2.4-5.3 1.6-.8zm-2.7 21l-8 2.4-.6-1.8 18.2-5.5 3.2 10.7-1.7.5-2.7-8.9-6.9 2.1 2.2 7.5-1.7.5-2-7.5zm-4.3 20.9c-.7-5.3 2.9-9.5 8.6-10.2 5.7-.7 10.3 2.5 10.9 7.7.7 5.3-2.9 9.5-8.6 10.2-5.7.7-10.2-2.5-10.9-7.7zm17.7-2.3c-.5-4.2-4.1-6.6-8.8-6-4.7.6-7.6 3.9-7 8 .6 4.1 4.1 6.6 8.8 6 4.7-.5 7.5-3.8 7-8zm-15.1 15l-.5 8.7-1.8-.1.6-10.6 19 1.1-.1 1.9-17.2-1zm-3 12.4l.3-1.9 18.8 2.9-.3 1.9-18.8-2.9zm-2.8 11c1.5-5.1 6.4-7.6 11.9-6 5.5 1.6 8.5 6.3 7 11.4-1.5 5.1-6.4 7.6-12 6-5.5-1.5-8.4-6.3-6.9-11.4zm17.1 4.9c1.1-4-1.2-7.7-5.8-9-4.6-1.3-8.5.6-9.6 4.6-1.2 4 1.2 7.7 5.8 9 4.6 1.3 8.5-.6 9.6-4.6zM954.3 520c1.7.9 2.5 3.1 1.5 4.9-.9 1.7-3.2 2.4-4.9 1.5-1.7-.9-2.4-3.1-1.5-4.9 1-1.7 3.2-2.4 4.9-1.5zm1.8 21.4l-1.3 1.6-13.5-4.3c-1.1-.3-2.1-.7-3.4-1.2.8 1.2 1.6 2.4 1.9 3.1l7.1 12.2-1.2 1.5-10.3-17.6 1.2-1.6 19.5 6.3zm-26.1 1.5l12.7 14.2-8.5 7.6-1.2-1.3 7-6.3-4.6-5.1-6.4 5.7-1.2-1.3 6.4-5.7-4.6-5.2-7.1 6.3-1.2-1.3 8.7-7.6zm-10.2 9l10 16.2-6 3.7c-3.3 2-6.4 1.5-8.2-1.4-1.4-2.3-1.2-4.7.5-6.6l-7.8-4.8 1.8-1.1 7.5 4.7 4.7-2.9-4.2-6.7 1.7-1.1zm3.4 9.2l-4.5 2.8c-2.2 1.4-2.8 3.4-1.5 5.5 1.3 2.1 3.4 2.4 5.6 1l4.4-2.7-4-6.6zm-14.6-2.1l-.1 20.3-2.2.8-13.2-15.5 1.9-.7 3.5 4.1 8.2-3v-5.4l1.9-.6zm-1.8 7.8l-7.1 2.6 6.6 7.8c.2.2.4.5.5.6v-11zm-24.4 18.8c-3.4.4-5.9-1.3-6.5-4.5l1.9-.2c.4 2.1 2 3.2 4.4 2.9 2.7-.3 4.3-1.8 4-4-.2-1.7-1.3-2.6-3.3-2.9l-3.3-.5c-3-.4-4.7-1.9-5-4.5-.3-3.3 2-5.6 5.9-6 3.7-.4 6.4 1.3 6.9 4.4l-2 .2c-.3-2-2.2-3.1-4.8-2.8-2.8.3-4.4 1.8-4.2 4 .2 1.7 1.2 2.7 3.3 3l3.3.5c3 .4 4.8 1.9 5 4.5.5 3.2-1.8 5.5-5.6 5.9zm-9.1-12.6h-1.9v-.7c0-2.3-1.2-3.7-3.6-3.7-2.4 0-3.5 1.5-3.5 3.8l.1 13.8h-1.9l-.1-13.8c0-3.5 2.2-5.5 5.4-5.6 3.4 0 5.4 2.2 5.4 5.5l.1.7zm-15.7 13l-1.9-.1.6-12.3c.2-3.3-1.6-5.2-4.9-5.4-3.2-.1-5.2 1.6-5.3 4.9l-.6 12.3-1.9-.1.6-12.4c.2-4.3 3-6.8 7.3-6.6 4.4.2 6.9 2.9 6.7 7.3l-.6 12.4zm-17.7-20l-.6 19-1.9-.1-9.9-16.2-.5 15.8-1.9-.1.6-19 1.9.1 10 16.2.4-15.7h1.9zm-20-.5l1.4 19-1.9.1-11.6-15 1.2 15.8-1.9.1-1.4-19 1.9-.1 11.6 15-1.2-15.8 1.9-.1zm-20.6 2.2l4.9 18.4-11 2.9-.5-1.7 9.1-2.4-1.8-6.6-8.3 2.2-.4-1.7 8.3-2.2-1.8-6.7-9.2 2.4-.5-1.7 11.2-2.9zM787 592.4c-3 1.6-5.9.9-7.7-1.8l1.7-.9c1.2 1.8 3 2.2 5.2 1.1 2.4-1.2 3.3-3.3 2.3-5.2-.8-1.5-2.1-2-4.1-1.5l-3.3.8c-3 .7-5.1-.1-6.3-2.4-1.5-2.9-.2-6 3.3-7.8 3.3-1.7 6.4-1.1 8 1.5l-1.7.9c-1-1.7-3.2-2.1-5.5-.9-2.5 1.3-3.4 3.3-2.4 5.2.8 1.5 2.1 2.1 4.2 1.5l3.2-.8c3-.7 5.2.1 6.3 2.4 1.5 3.1.2 6.2-3.2 7.9zm-10.8 7.2c-2.6 2.2-5.6 2.1-7.9-.1l1.5-1.2c1.5 1.5 3.4 1.5 5.3 0 2.1-1.7 2.6-3.9 1.2-5.5-1.1-1.3-2.5-1.5-4.4-.6l-3 1.5c-2.8 1.3-5 1-6.7-1-2.1-2.5-1.5-5.8 1.6-8.3 2.9-2.3 6-2.4 8.2-.2l-1.5 1.2c-1.3-1.5-3.5-1.4-5.5.3-2.2 1.8-2.7 4-1.3 5.6 1.1 1.3 2.5 1.6 4.4.6l3-1.4c2.8-1.3 5-1 6.7 1 2 2.5 1.4 5.7-1.6 8.1zm-26.2-.8c3.2-4.3 8.7-4.8 13.3-1.3 4.6 3.5 5.6 9 2.4 13.2-3.2 4.3-8.7 4.8-13.3 1.2-4.6-3.4-5.6-8.9-2.4-13.1zm14.2 10.8c2.5-3.3 1.7-7.6-2.1-10.5-3.8-2.9-8.1-2.6-10.6.8-2.5 3.4-1.7 7.6 2.1 10.5 3.8 2.9 8.1 2.5 10.6-.8zm-22.1 1.6l17.3 8-.8 1.8-18.8 2.8 14.4 6.7-.8 1.7-17.3-8 .8-1.7 18.8-2.8-14.4-6.7.8-1.8zm-3.8 29.8l-6.8-1.4.4-1.9 18.6 3.9-1.5 7.1c-.7 3.6-3.6 5.4-7.1 4.6-3.4-.7-5.5-3.5-4.7-7.1l1.1-5.2zm10.1 2.1l-8.4-1.7-1 4.9c-.6 2.7.8 4.6 3.4 5.2 2.6.5 4.5-.7 5-3.3l1-5.1zM727.8 663c.3-5.3 4.5-8.8 10.3-8.5 5.8.3 9.7 4.3 9.4 9.6-.3 5.3-4.5 8.8-10.3 8.5-5.8-.3-9.7-4.3-9.4-9.6zm17.8 1c.2-4.2-2.9-7.2-7.6-7.5-4.8-.3-8.1 2.4-8.4 6.6-.3 4.2 2.9 7.3 7.6 7.5 4.8.3 8.2-2.4 8.4-6.6zM728 677l18.9-1.9.7 7.1c.4 3.8-1.5 6.4-4.9 6.7-2.7.3-4.8-1-5.7-3.3l-7.8 4.9-.2-2.1 7.5-4.6-.5-5.5-7.9.8-.1-2.1zm9.7 1l.5 5.2c.3 2.6 1.8 4 4.2 3.8 2.5-.2 3.7-2 3.4-4.6l-.5-5.2-7.6.8zm10.6 10.6l3.1 13.3-1.7.4-1.3-5.7-16.8 3.9-.4-1.9 16.8-3.9-1.3-5.7 1.6-.4zm-5.7 20.2l-7.8 2.9-.7-1.8 17.8-6.7 3.9 10.5-1.6.6-3.3-8.7-6.7 2.5 2.7 7.3-1.6.6-2.7-7.2zm.8 23c-2.6-4.7-.9-9.9 4.1-12.7 5-2.8 10.4-1.6 13 3.1 2.6 4.7.9 9.9-4.2 12.7-4.9 2.8-10.3 1.5-12.9-3.1zm15.6-8.7c-2.1-3.7-6.3-4.6-10.4-2.3-4.1 2.3-5.6 6.4-3.5 10.1 2.1 3.7 6.3 4.6 10.4 2.3 4.1-2.4 5.5-6.5 3.5-10.1zm-5.4 20.7l5.3 6.9-1.4 1.1-6.5-8.5 15.1-11.6 1.2 1.5-13.7 10.6zm7.8 12.2l-1.3-1.4 14.1-12.8 1.3 1.4-14.1 12.8zm9.4 9.7c-4-3.5-4.1-9.1-.2-13.4 3.8-4.3 9.4-4.9 13.3-1.4 4 3.5 4.1 9.1.2 13.4-3.8 4.4-9.3 4.9-13.3 1.4zm11.9-13.3c-3.1-2.8-7.4-2.3-10.6 1.3-3.2 3.6-3.2 7.9 0 10.7 3.1 2.8 7.5 2.3 10.6-1.3 3.1-3.6 3.1-7.9 0-10.7zm8.4 19.6c1-1.7 3.3-2.3 5-1.3 1.7 1 2.3 3.3 1.3 5-1 1.7-3.3 2.3-5 1.3-1.7-1-2.3-3.3-1.3-5zm18.6-3.2l1.9.7.5 14.2c0 1.1.1 2.2 0 3.6.8-1.2 1.7-2.3 2.2-2.9l9-10.9 1.9.6-13 15.7-1.9-.6-.6-20.4zm13.9 24.1l2.6-18.9 11.3 1.6-.2 1.7-9.4-1.3-.9 6.8 8.5 1.2-.2 1.7-8.5-1.2-1 6.9 9.4 1.3-.2 1.7-11.4-1.5zm17.3 1.8l-1.7-19 7.1-.6c3.8-.3 6.4 1.6 6.7 4.9.2 2.7-1 4.8-3.4 5.6l4.8 7.8-2.1.2-4.6-7.5-5.5.5.7 7.9-2 .2zm1.1-9.8l5.2-.5c2.6-.2 4-1.8 3.8-4.2-.2-2.5-2-3.7-4.5-3.4l-5.2.5.7 7.6zm17.2 7.6l-1.4-20.2 2.2-1 14.3 14.4-1.8.8-3.8-3.8-8 3.6.4 5.4-1.9.8zm1.2-7.9l6.9-3.1-7.2-7.3c-.2-.2-.4-.4-.5-.6 0 .2.1.5.1.8l.7 10.2zm14.7-24.9c2.5-2.3 5.5-2.5 7.9-.3l-1.4 1.3c-1.6-1.4-3.5-1.3-5.3.3-2 1.8-2.3 4-.8 5.6 1.1 1.2 2.6 1.3 4.4.3l2.9-1.6c2.7-1.5 5-1.3 6.7.6 2.2 2.4 1.8 5.7-1.1 8.4-2.7 2.5-5.9 2.8-8.1.7l1.4-1.3c1.4 1.4 3.6 1.1 5.5-.6 2-1.9 2.4-4.1.9-5.7-1.2-1.2-2.6-1.4-4.4-.4l-2.9 1.6c-2.7 1.5-5 1.3-6.8-.6-2.2-2.4-1.7-5.7 1.1-8.3zm15 4.1l1.3-1.3.5.5c1.6 1.6 3.5 1.8 5.2.1 1.7-1.7 1.4-3.6-.2-5.2l-9.8-9.7 1.3-1.4 9.9 9.7c2.5 2.4 2.4 5.5.1 7.8-2.4 2.4-5.4 2.3-7.7 0l-.6-.5zm1.4-20l1.4-1.4 8.7 8.7c2.4 2.4 4.9 2.3 7.3 0 2.3-2.3 2.3-4.9-.1-7.2l-8.7-8.7 1.4-1.4 8.8 8.8c3 3 3 6.8 0 9.9-3.1 3.1-6.8 3.2-9.9.1l-8.9-8.8zm26.4.5l-13-13.9 1.4-1.3 18.5 4.5L914 722l1.4-1.3 13 13.9-1.4 1.3-18.5-4.4 10.8 11.6-1.4 1.2zm13.6-12.5l-12.3-14.5 1.5-1.3 18.2 5.3-10.3-12.1 1.4-1.2 12.3 14.5-1.4 1.2-18.3-5.2 10.3 12.1-1.4 1.2zm14.2-12l-11.8-15 8.9-7 1.1 1.4-7.4 5.9 4.2 5.4 6.7-5.3 1.1 1.4-6.7 5.3 4.3 5.5 7.5-5.9 1.1 1.4-9 6.9zm4.2-27.9c2.7-2.1 5.7-2 7.9.4l-1.5 1.2c-1.5-1.6-3.4-1.6-5.3-.2-2.1 1.6-2.7 3.8-1.3 5.5 1 1.3 2.5 1.6 4.3.7l3.1-1.4c2.8-1.3 5.1-.9 6.6 1.2 2 2.6 1.3 5.8-1.8 8.2-2.9 2.3-6.1 2.3-8.2 0l1.6-1.2c1.3 1.5 3.5 1.5 5.5-.1 2.2-1.7 2.8-3.9 1.4-5.6-1-1.3-2.5-1.6-4.4-.8l-3 1.3c-2.8 1.3-5.1.9-6.7-1.2-1.9-2.4-1.2-5.6 1.8-8zm12-9.2c2.7-2.1 5.7-1.9 7.8.5l-1.5 1.2c-1.5-1.6-3.4-1.7-5.3-.2-2.1 1.6-2.7 3.8-1.4 5.5 1 1.3 2.4 1.6 4.3.8l3.1-1.3c2.8-1.2 5.1-.8 6.6 1.3 2 2.6 1.2 5.8-1.9 8.2-2.9 2.2-6.1 2.2-8.2-.1l1.6-1.2c1.3 1.5 3.5 1.5 5.5-.1 2.2-1.7 2.8-3.8 1.5-5.6-1-1.4-2.5-1.7-4.4-.8l-3 1.3c-2.8 1.2-5.1.8-6.7-1.3-1.8-2.7-1-5.9 2-8.2zm25.9 5.4c-4.3 3.1-9.7 2-13.1-2.7-3.4-4.7-2.7-10.2 1.6-13.3 4.3-3.1 9.7-2 13.1 2.7 3.4 4.7 2.7 10.2-1.6 13.3zm-10.4-14.5c-3.4 2.4-3.9 6.8-1.1 10.6 2.8 3.9 7 4.8 10.4 2.4 3.4-2.4 3.9-6.8 1.1-10.6-2.7-3.9-7-4.9-10.4-2.4zm20.1 7.2l-10.4-15.9 1.6-1.1 17.4 7.5-8.7-13.3 1.6-1 10.4 15.9-1.6 1-17.5-7.5 8.7 13.3-1.5 1.1zm20-20.7l3.3 6.1-1.7.9-9.1-16.7 6.4-3.5c3.2-1.8 6.4-.8 8.1 2.4 1.7 3 .8 6.4-2.4 8.2l-4.6 2.6zm-5-9l4.1 7.5 4.4-2.4c2.4-1.3 3-3.6 1.7-5.9-1.3-2.3-3.4-2.9-5.8-1.7l-4.4 2.5zm27.7 5.8c-4.9 2.2-9.9-.1-12.3-5.3-2.3-5.3-.6-10.5 4.3-12.7 4.9-2.2 9.9.1 12.3 5.4 2.3 5.2.5 10.4-4.3 12.6zm-7.2-16.3c-3.8 1.7-5.2 5.8-3.2 10.2 1.9 4.4 5.9 6.2 9.7 4.5 3.8-1.7 5.2-5.9 3.3-10.2-2-4.4-6-6.2-9.8-4.5zm17.6 11.6L1045 634l6.8-2.1c3.7-1.1 6.5.2 7.5 3.4.8 2.6 0 4.9-2.1 6.2l6.3 6.6-2 .6-6-6.4-5.3 1.6 2.3 7.5-1.9.8zm-1-9.8l5-1.6c2.5-.8 3.6-2.6 2.8-4.9-.7-2.4-2.7-3.2-5.2-2.4l-5 1.5 2.4 7.4zm10.6-13l13.4-2.4.3 1.7-5.8 1 3.1 17-1.9.3-3.1-17-5.8 1-.2-1.6zm19.7 7.8l.3 8.4-1.9.1-.8-19 11.2-.5.1 1.8-9.3.4.3 7.2 7.8-.3.1 1.7-7.8.2zm18.8 9.4c-5.3-.8-8.3-5.4-7.4-11.1.9-5.7 5.2-9.2 10.5-8.3 5.3.8 8.3 5.4 7.4 11.1-.9 5.7-5.2 9.1-10.5 8.3zm2.8-17.6c-4.1-.6-7.5 2.1-8.2 6.8-.7 4.7 1.6 8.3 5.8 9 4.1.6 7.5-2.1 8.2-6.8.7-4.7-1.7-8.3-5.8-9zm10.1 18.6l8.2 3.1-.6 1.6-10-3.7 6.7-17.8 1.8.7-6.1 16.1zm10.8 6.6l-1.7-.9 8.6-17 1.7.9-8.6 17zm9.4 6.1c-4.4-3-5.1-8.5-1.8-13.2 3.3-4.7 8.7-6 13.1-2.9 4.4 3 5.1 8.5 1.8 13.3-3.3 4.6-8.7 5.8-13.1 2.8zm10.2-14.7c-3.5-2.4-7.7-1.4-10.4 2.5s-2.2 8.2 1.2 10.6c3.5 2.4 7.7 1.4 10.4-2.5 2.8-3.9 2.2-8.2-1.2-10.6zm8.1 20.4c1.4-1.3 3.8-1.3 5.2.2 1.3 1.4 1.2 3.8-.2 5.1-1.4 1.3-3.8 1.3-5.1-.2-1.4-1.4-1.3-3.8.1-5.1zm20.8 5.4l1.1 1.7-8.5 11.3c-.7.9-1.3 1.8-2.2 2.8 1.4-.4 2.8-.7 3.5-.8l13.9-2.8 1 1.7-20 4-1.1-1.7 12.3-16.2zm-7 25.2l17.5-7.5 4.5 10.5-1.6.7-3.7-8.7-6.3 2.7 3.4 7.9-1.6.7-3.4-7.9-6.4 2.7 3.7 8.7-1.6.7-4.5-10.5zm5.2 12.7l18.5-4.6 1.7 6.9c.9 3.7-.6 6.5-3.9 7.3-2.7.7-4.9-.3-6.1-2.5l-7 5.9-.5-2.1 6.7-5.7-1.3-5.4-7.7 1.9-.4-1.7zm9.8-.5l1.3 5.1c.6 2.6 2.4 3.7 4.7 3.1 2.4-.6 3.3-2.5 2.7-5l-1.2-5-7.5 1.8zm-6.6 13.3l19.3 6.3.1 2.4-18.8 7.8-.1-2 5-2.1-.3-8.8-5.1-1.7-.1-1.9zm6.9 4.1l.3 7.6 9.5-3.9c.3-.1.6-.2.8-.3-.2 0-.5-.1-.8-.2l-9.8-3.2zm10.5 29.1c-.7 3.4-3.1 5.2-6.2 4.8l.4-1.9c2.2.2 3.7-.9 4.1-3.3.6-2.6-.4-4.6-2.5-5.1-1.6-.3-2.9.4-3.8 2.2l-1.5 3c-1.3 2.8-3.3 3.9-5.8 3.4-3.2-.7-4.7-3.6-3.9-7.5.8-3.6 3.2-5.7 6.3-5.2l-.4 1.9c-2-.3-3.6 1.1-4.2 3.7-.6 2.7.4 4.8 2.5 5.2 1.7.4 3-.3 3.9-2.3l1.5-3c1.3-2.8 3.3-3.9 5.9-3.4 2.9.8 4.4 3.8 3.7 7.5zm-14.9 4.7l-.6 1.8-.7-.2c-2.1-.7-3.9-.1-4.7 2.1-.8 2.3.3 3.8 2.4 4.6l13 4.5-.6 1.8-13.1-4.5c-3.3-1.1-4.5-3.9-3.4-7 1.1-3.2 3.9-4.4 7-3.3l.7.2zm6.8 19.5l-.8 1.7-11.1-5.3c-3-1.4-5.4-.6-6.9 2.4-1.4 2.9-.5 5.4 2.5 6.8l11.1 5.3-.8 1.7-11.2-5.3c-3.9-1.9-5.1-5.4-3.3-9.3 1.9-4 5.4-5.3 9.3-3.4l11.2 5.4zm-25 7.7l16.4 9.7-1 1.7-19 .9 13.6 8.1-1 1.6-16.4-9.7 1-1.6 19-1-13.6-8.1 1-1.6zm-9.4 15.9l15.9 10.5-1.1 1.6h-19l13.2 8.7-1 1.6-15.9-10.5 1-1.6h19l-13.2-8.7 1.1-1.6zm-10.2 15l14.9 11.8-7.1 8.9-1.4-1.1 5.9-7.4-5.4-4.3-5.3 6.7-1.4-1.1 5.3-6.7-5.4-4.3-5.9 7.4-1.4-1.1 7.2-8.8zm1.3 28.3c-2.4 2.5-5.3 2.8-7.8.9l1.3-1.4c1.7 1.3 3.6 1.1 5.2-.6 1.8-2 2-4.2.5-5.7-1.2-1.1-2.7-1.2-4.4-.1l-2.8 1.8c-2.6 1.7-4.9 1.6-6.7-.1-2.4-2.3-2.2-5.6.5-8.4 2.5-2.7 5.7-3.2 8.1-1.2l-1.3 1.4c-1.5-1.3-3.7-.9-5.5 1-1.9 2-2.1 4.3-.6 5.8 1.2 1.2 2.7 1.2 4.5.1l2.8-1.8c2.6-1.7 4.9-1.6 6.8.1 2.3 2.1 2.1 5.4-.6 8.2zm-11.3 11.1c-2.6 2.3-5.5 2.4-7.9.2l1.4-1.3c1.6 1.5 3.5 1.4 5.3-.2 2-1.8 2.4-4 .9-5.6-1.1-1.2-2.6-1.4-4.4-.4l-3 1.6c-2.7 1.5-5 1.2-6.7-.7-2.2-2.5-1.7-5.7 1.2-8.4 2.8-2.5 5.9-2.7 8.2-.5l-1.5 1.3c-1.4-1.4-3.6-1.2-5.5.5-2.1 1.9-2.5 4.1-1 5.7 1.1 1.3 2.6 1.5 4.4.4l2.9-1.6c2.7-1.5 5-1.2 6.7.7 2.3 2.5 1.8 5.7-1 8.3zm-26.2-4c4.3-3.2 9.7-2.2 13.2 2.4s3 10.1-1.3 13.3c-4.3 3.2-9.7 2.2-13.2-2.4-3.4-4.6-2.9-10.1 1.3-13.3zm10.8 14.2c3.4-2.5 3.7-6.9.8-10.7-2.9-3.8-7.1-4.7-10.5-2.1-3.4 2.6-3.7 6.9-.8 10.7 2.9 3.8 7.2 4.6 10.5 2.1zm-20.4-6.9l10.8 15.7-1.6 1.1-17.6-7.1 9 13.1-1.6 1.1-10.8-15.7 1.6-1.1 17.6 7.1-9-13.1 1.6-1.1zm-19.3 22.1l-4.3-5.5 1.5-1.2 11.8 14.9-5.7 4.5c-2.9 2.3-6.2 1.8-8.4-1-2.1-2.7-1.9-6.2.9-8.5l4.2-3.2zm6.4 8l-5.3-6.7-3.9 3.1c-2.2 1.7-2.3 4.1-.7 6.1 1.6 2.1 3.9 2.3 6 .7l3.9-3.2zm-28.7 2.3c3.6-4 9.1-4 13.4-.2 4.3 3.9 4.8 9.4 1.3 13.3-3.6 4-9.1 4-13.4.1-4.3-3.8-4.8-9.3-1.3-13.2zm13.3 11.9c2.8-3.1 2.3-7.4-1.2-10.6-3.5-3.2-7.9-3.2-10.7-.1-2.8 3.1-2.3 7.5 1.2 10.6 3.5 3.2 7.9 3.2 10.7.1zm-22.1-.2l16.6 9.3-3.5 6.2c-1.9 3.4-4.9 4.4-7.8 2.7-2.4-1.3-3.4-3.5-2.8-6l-9.2-.4 1-1.9 8.8.4 2.7-4.9-6.9-3.8 1.1-1.6zm7.4 6.4l-2.5 4.6c-1.3 2.3-.8 4.3 1.3 5.5 2.2 1.2 4.1.4 5.4-1.8l2.5-4.5-6.7-3.8zm2.8 14.4l-4.5 12.9-1.7-.6 1.9-5.5-16.3-5.7.6-1.8 16.3 5.7 1.9-5.5 1.8.5zm-15.5 14l-8.2-1.5.4-1.9 18.7 3.5-2.1 11-1.7-.3 1.7-9.1-7.1-1.3-1.4 7.7-1.7-.3 1.4-7.8zm-11 20.2c.1-5.3 4.3-9 10.1-8.8 5.8.1 9.8 4 9.6 9.3-.1 5.3-4.3 9-10.1 8.8-5.8-.1-9.7-4-9.6-9.3zm17.8.5c.1-4.2-3.1-7.1-7.8-7.3-4.8-.1-8.1 2.7-8.2 6.9-.1 4.2 3.1 7.2 7.8 7.3 4.8.1 8.1-2.7 8.2-6.9zm-15.2 15l.9 8.7-1.7.2-1.1-10.6 18.9-2 .2 1.9-17.2 1.8zm.1 14.2l-.3-1.9 18.8-3.2.3 1.9-18.8 3.2zm2.5 13c-1.3-5.2 1.7-9.8 7.3-11.2 5.6-1.4 10.5 1.2 11.8 6.4 1.3 5.2-1.7 9.8-7.4 11.2-5.5 1.4-10.4-1.2-11.7-6.4zm17.3-4.3c-1-4.1-4.9-6.1-9.5-4.9-4.6 1.2-7.1 4.7-6 8.8 1 4.1 4.9 6.1 9.5 4.9 4.6-1.1 7-4.7 6-8.8zm-4.7 21c1.8-.7 4 .3 4.7 2.2.7 1.8-.3 4-2.2 4.6-1.8.7-4-.3-4.6-2.2-.7-1.8.3-4 2.1-4.6zm16.8 10.4l.8 1.9-10 10c-.8.8-1.6 1.6-2.6 2.5 1.4-.2 2.8-.3 3.6-.3l14.1-.8.8 1.8-20.3 1.2-.8-1.8 14.4-14.5zm-9 25.5l16.9-8.7 5.2 10.1-1.6.8-4.3-8.4-6.1 3.1 3.9 7.6-1.5.8-3.9-7.6-6.2 3.2 4.3 8.4-1.6.8-5.1-10.1zm7 13.6l16.9-8.7 3.2 6.3c1.8 3.4.9 6.5-2.1 8-2.4 1.2-4.8.8-6.5-1l-5.5 7.4-1-1.9 5.3-7.1-2.5-4.9-7 3.6-.8-1.7zm9.4-2.7l2.4 4.7c1.2 2.3 3.2 3.1 5.3 2 2.2-1.1 2.7-3.2 1.5-5.5l-2.4-4.6-6.8 3.4zm-2.5 16.1l20.1-2.5 1.1 2.1-13.7 15-.9-1.8 3.6-4-4-7.8-5.3.6-.9-1.6zm8 .9l3.5 6.7 6.9-7.6c.2-.2.4-.5.6-.6-.2 0-.5.1-.8.1l-10.2 1.4z"
            fill="#F42A08"
            strokeWidth="0"
            stroke="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition} />
        </g>
        <defs>
          <clipPath id="clip0_1070_471">
            <rect width="1247" height="1012.7" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <motion.div
        className="box"
        initial={{ offsetDistance: '0%', scale: 2.5 }}
        animate={{ offsetDistance: '100%', scale: 1 }}
        transition={transition} />
    </div>
  );
}