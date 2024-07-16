import Navbar from '../components/navbar.jsx'
export default function MobileNav({showFeedControls, setShowFeedControls}) {

     const showForm = () => {
          setShowFeedControls(!showFeedControls)
     }
     return <>
     <Navbar showFeedControls={showFeedControls} setShowFeedControls={setShowFeedControls}/>
     <div 
     style={{
          backgroundColor: '#1F2544',
          position: 'relative',
          minHeight: '12vh'
     }}
     className='mobile-nav'
     >
          {/* Parent div for the bars */}
     <div onClick={ showForm } style={{
          position: 'absolute',
          right: '0%',
          top: '25%',
          borderRadius: '3px',
          cursor: 'pointer',
          padding: '6px',
          display: 'grid',
          placeItems: 'center',
          minWidth: '50px',
          gap: '6px',
     }}>
     <div
     style={{
          width: '90%',
          padding: '2px',
          background: '#F7F9F2',
     }}
     > </div> 
     <div
     style={{
          width: '90%',
          padding: '2px',
          background: '#F7F9F2',
     }}
     ></div><div
     style={{
          width: '90%',
          padding: '2px',
          background: '#F7F9F2',
     }}
     ></div>
     </div>
     </div>

     </>
}