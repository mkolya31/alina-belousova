import React from 'react'

import { Welcome } from './blocks/welcome'
import { PersonalStylist } from './blocks/personal-stylist'
import { FilmingStylization } from './blocks/filming-stylization'
import { Contacts } from './blocks/contacts'

export function Home() {

    return (
        <>
            <Welcome />
            <PersonalStylist />
            <FilmingStylization />
            <Contacts />
        </>
    )
}
