import React from 'react'
import { Wrapper } from 'components'
import { useTranslation } from 'react-i18next'

const Homepage = () => {
    const { t } = useTranslation()
    
    return (
        <Wrapper>
            {t('homepage-content')}
        </Wrapper>
    )
}

export default Homepage