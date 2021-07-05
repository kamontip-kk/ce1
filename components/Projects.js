import React from 'react';
import Link from 'next/link';

function Projects(){
    return(
        <div id="Projects">
        <h1>All Projects</h1>
        <Link href="/webdev"><a>Web Development</a></Link>
        <Link href="/gamedev"><a>Game Development</a></Link>
        <Link href="/graphic"><a>Graphic Design</a></Link>
        </div>
    )
}

export default Projects;