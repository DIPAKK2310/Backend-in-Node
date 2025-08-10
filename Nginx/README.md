# Your Project Name

## Server Architecture

<svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
 
 <svg viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="500" fill="#f8f9fa"/>
  
  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2c3e50">Nginx Server Architecture</text>
  
  <!-- Browser -->
  <g id="browser">
    <rect x="50" y="100" width="120" height="80" rx="10" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
    <text x="110" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white" font-weight="bold">Browser</text>
    <text x="110" y="140" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white">Client</text>
    <circle cx="70" cy="155" r="4" fill="white"/>
    <circle cx="85" cy="155" r="4" fill="white"/>
    <circle cx="100" cy="155" r="4" fill="white"/>
    <rect x="60" y="165" width="100" height="10" fill="white" rx="2"/>
  </g>
  
  <!-- Request Arrow -->
  <g id="request">
    <path d="M 170 120 Q 250 90 330 120" fill="none" stroke="#3498db" stroke-width="3" marker-end="url(#arrowblue)"/>
    <text x="250" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#3498db" font-weight="bold">HTTP Request</text>
    <text x="250" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#3498db">Port 80/443</text>
  </g>
  
  <!-- Response Arrow -->
  <g id="response">
    <path d="M 330 160 Q 250 190 170 160" fill="none" stroke="#27ae60" stroke-width="3" marker-end="url(#arrowgreen)"/>
    <text x="250" y="185" text-anchor="middle" font-family="Arial, sans-serif" font-size="11" fill="#27ae60" font-weight="bold">HTTP Response</text>
    <text x="250" y="198" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" fill="#27ae60">Files & Data</text>
  </g>
  
  <!-- Nginx Server -->
  <g id="nginx">
    <rect x="330" y="100" width="140" height="80" rx="10" fill="#2c3e50" stroke="#34495e" stroke-width="2"/>
    <text x="400" y="125" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="white" font-weight="bold">Nginx Server</text>
    <text x="400" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#bdc3c7">Web Server</text>
    <text x="400" y="160" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#bdc3c7">Reverse Proxy</text>
    
    <!-- Port indicators -->
    <circle cx="340" cy="130" r="6" fill="#e74c3c"/>
    <text x="340" y="135" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" fill="white">80</text>
    <circle cx="340" cy="150" r="6" fill="#e67e22"/>
    <text x="340" y="155" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="white">443</text>
  </g>
  
  <!-- File System -->
  <g id="filesystem">
    <rect x="550" y="80" width="180" height="180" rx="10" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2"/>
    <text x="640" y="105" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" font-weight="bold">File System</text>
    
    <!-- Folders -->
    <g id="folders">
      <!-- HTML folder -->
      <rect x="570" y="120" width="70" height="25" fill="#f39c12" stroke="#e67e22" stroke-width="1" rx="3"/>
      <text x="605" y="137" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white" font-weight="bold">HTML</text>
      
      <!-- CSS folder -->
      <rect x="650" y="120" width="70" height="25" fill="#9b59b6" stroke="#8e44ad" stroke-width="1" rx="3"/>
      <text x="685" y="137" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white" font-weight="bold">CSS</text>
      
      <!-- JS folder -->
      <rect x="570" y="155" width="70" height="25" fill="#e74c3c" stroke="#c0392b" stroke-width="1" rx="3"/>
      <text x="605" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white" font-weight="bold">JS</text>
      
      <!-- Images folder -->
      <rect x="650" y="155" width="70" height="25" fill="#1abc9c" stroke="#16a085" stroke-width="1" rx="3"/>
      <text x="685" y="172" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white" font-weight="bold">Images</text>
      
      <!-- Assets folder -->
      <rect x="570" y="190" width="70" height="25" fill="#34495e" stroke="#2c3e50" stroke-width="1" rx="3"/>
      <text x="605" y="207" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white" font-weight="bold">Assets</text>
      
      <!-- Config folder -->
      <rect x="650" y="190" width="70" height="25" fill="#95a5a6" stroke="#7f8c8d" stroke-width="1" rx="3"/>
      <text x="685" y="207" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="white" font-weight="bold">Config</text>
    </g>
    
    <!-- Document root indicator -->
    <text x="640" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#7f8c8d">/var/www/html</text>
  </g>
  
  <!-- File Access Arrow -->
  <g id="fileaccess">
    <path d="M 470 140 L 530 140" fill="none" stroke="#9b59b6" stroke-width="2" marker-end="url(#arrowpurple)" stroke-dasharray="5,5"/>
    <text x="500" y="135" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#9b59b6" font-weight="bold">File Access</text>
  </g>
  
  <!-- Process Flow -->
  <g id="process">
    <rect x="100" y="320" width="600" height="120" rx="10" fill="#ecf0f1" stroke="#bdc3c7" stroke-width="1"/>
    <text x="400" y="345" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#2c3e50" font-weight="bold">Request Processing Flow</text>
    
    <!-- Flow steps -->
    <g id="step1">
      <circle cx="150" cy="375" r="20" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
      <text x="150" y="380" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white" font-weight="bold">1</text>
      <text x="150" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Client Request</text>
    </g>
    
    <g id="step2">
      <circle cx="300" cy="375" r="20" fill="#e67e22" stroke="#d35400" stroke-width="2"/>
      <text x="300" y="380" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white" font-weight="bold">2</text>
      <text x="300" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Nginx Processing</text>
    </g>
    
    <g id="step3">
      <circle cx="450" cy="375" r="20" fill="#27ae60" stroke="#229954" stroke-width="2"/>
      <text x="450" y="380" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white" font-weight="bold">3</text>
      <text x="450" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">File Retrieval</text>
    </g>
    
    <g id="step4">
      <circle cx="600" cy="375" r="20" fill="#9b59b6" stroke="#8e44ad" stroke-width="2"/>
      <text x="600" y="380" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" fill="white" font-weight="bold">4</text>
      <text x="600" y="405" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" fill="#2c3e50">Response Sent</text>
    </g>
    
    <!-- Flow arrows -->
    <path d="M 175 375 L 275 375" fill="none" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowgray)"/>
    <path d="M 325 375 L 425 375" fill="none" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowgray)"/>
    <path d="M 475 375 L 575 375" fill="none" stroke="#7f8c8d" stroke-width="2" marker-end="url(#arrowgray)"/>
  </g>
  
  <!-- Arrow markers -->
  <defs>
    <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <polygon points="0,0 0,6 9,3" fill="#3498db"/>
    </marker>
    <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <polygon points="0,0 0,6 9,3" fill="#27ae60"/>
    </marker>
    <marker id="arrowpurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <polygon points="0,0 0,6 9,3" fill="#9b59b6"/>
    </marker>
    <marker id="arrowgray" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <polygon points="0,0 0,6 9,3" fill="#7f8c8d"/>
    </marker>
  </defs>
</svg>




</svg>

## Installation
...