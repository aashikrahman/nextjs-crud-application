import React from 'react';

import testImage from '../../assets/pexels.jpg';
import Image from 'next/image';

function pages() {
    return (
        <div>
            <p>show image here</p>

            <Image src={testImage} alt="" />
            <Image src={testImage} alt="" width={500} />
        </div>
    )
}

export default pages