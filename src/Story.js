import React from 'react';
import './Story.css';
import StoryCard from './StoryCard';

function Story() {

    const stories = [
        {
            name: "Nico Molon",
            imgSrc: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t39.30808-1/p160x160/221804375_4130701790362336_7413082527740818014_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeF-0AWUtp617Mwy0AnStRH-9DHnZrai_pj0MedmtqL-mOzKx9SkZ9IupNuaxUOgp7Wb6GAIne2nzOC3wm09_9Ky&_nc_ohc=Ysqkvmk0Tz0AX9LiUue&_nc_ht=scontent.fmnl13-2.fna&oh=40695dcb1c1cdb6804c62d36f0a4b3d9&oe=61103A6B",
            profileSrc: ""
        },
        {
            name: "Gio",
            imgSrc: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/s280x280/229104341_6153539374664177_2188643469182377136_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=365331&_nc_eui2=AeEzKNTDN-YKDPK_gwQmmtzY_99Vx1TM69H_31XHVMzr0cnjl-QKeNP98uIKhf8ELf4KBU7PehcEoSmXfQmDlOQV&_nc_ohc=7zRb5ugnClgAX8Z20WF&_nc_ht=scontent.fmnl13-2.fna&oh=26bacd33abb8c471060fee8fd9c4b908&oe=61331153            ",
            profileSrc: ""
        },
        {
            name: "Puloy",
            imgSrc: "https://scontent.fmnl13-1.fna.fbcdn.net/v/t39.30808-6/s280x280/233666149_188094830041333_7872188782017437295_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=365331&_nc_eui2=AeGqxTXJ-04cR14uU_m-z4oPj2dNW8lGhACPZ01byUaEACvz8wjA5Aeh-0DEeGXjSFLHBmRElwnBztU-82oKtctH&_nc_ohc=4XI277_Xcx8AX-Otx1d&_nc_ht=scontent.fmnl13-1.fna&oh=a5f12a9f5eea530cfe135065dd05e83a&oe=6110CE03            ",
            profileSrc: ""
        },
        {
            name: "Mark",
            imgSrc: "https://scontent.fmnl13-1.fna.fbcdn.net/v/t15.5256-10/s280x280/224920542_313756137100410_8982291195519660780_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=ad6a45&_nc_eui2=AeE6dDEw2oyoMDiltnT_MyleoWNDTliYfpWhY0NOWJh-lc0e5v6fbAnxTYkCCfPlc5qXwMLMtn30qzn0iIdUt6y-&_nc_ohc=aAVd80yhGbIAX-9R00Z&_nc_ht=scontent.fmnl13-1.fna&oh=aff467643af2736c733e613a2ae797e2&oe=61103A74            ",
            profileSrc: ""
        },
        {
            name: "Bernard",
            imgSrc: "https://scontent.fmnl13-2.fna.fbcdn.net/v/t1.6435-9/s280x280/230134436_6599293390096579_238628655168519126_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=365331&_nc_eui2=AeGkNBYh6dAZSWA-lykKzvCEvy_Td_sNiA2_L9N3-w2IDZrQnLCkJ-2Tv18Y0Itp8YaF8nI8rSm0Sche3Rtxq2-R&_nc_ohc=xLwH3KBKM_QAX_BOtXV&_nc_ht=scontent.fmnl13-2.fna&oh=53eae261567511a2390f0d61c6e55f80&oe=612FDD1C",
            profileSrc: ""
        },
        // {
        //     name: "Angelica",
        //     imgSrc: "https://scontent.fmnl17-1.fna.fbcdn.net/v/t15.5256-10/s280x280/229557970_1605101259826688_7103998380694428144_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=ad6a45&_nc_eui2=AeFZg68YgLTYO5sE-KJPMhLD5TxvHFqUriTlPG8cWpSuJErcJsfHPaVb4oML1Ag8wA2v96hP8mi7Jnwvv-BBQJ6n&_nc_ohc=WpclqhgEx6gAX_Bb-O1&_nc_ht=scontent.fmnl17-1.fna&oh=60c543d7abbde3c637ee280a3598109c&oe=61105C38",
        //     profileSrc: ""
        // },
    ]

    return (
        <div className="story">
            {stories.map((story, index) => (
                <StoryCard 
                name={story.name} 
                imgSrc={story.imgSrc}
                key={index} 
                index={index}/>
            ))}
        </div>
    )
}

export default Story
