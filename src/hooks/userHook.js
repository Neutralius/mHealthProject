import React, { useState, useEffect } from 'react'
import {getLocationFromSessionStorage} from '../utils/SessionStorageUtils'

export const [userPosition, setUserPosition] = useState({
    position: [52.51634963490139, 13.377652149017736],
    text: 'dein Standort'
})