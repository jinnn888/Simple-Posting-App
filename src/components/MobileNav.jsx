import Navbar from '../components/navbar.jsx'
export default function MobileNav({showFeedControls, setShowFeedControls}) {

     const showForm = () => {
          setShowFeedControls(!showFeedControls)
     }
     return <>
     <Navbar showFeedControls={showFeedControls} setShowFeedControls={setShowFeedControls}/>
    
          {/* Parent div for the bars */}
     <div onClick={ showForm } className='mobile-nav'style={{
          maxWidth: '50px',
          borderRadius: '3px',
          cursor: 'pointer',
          padding: '6px',
     }}>
     <div></div> 
     <div></div>
     <div></div>

     
     </div>

     </>
}