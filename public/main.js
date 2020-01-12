
getHtml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','3.html')
    request.onload = ()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = ()=>{
        console.log('HTML失败了')
    }
    request.send() 
}
getJs.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','2.js')
    request.onload =()=>{
       
        const script =  document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{
        console.log('JS失败')
    }
    request.send()

}
getCss.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','style.css')
    request.onreadystatechange = ()=>{  
        if(request.readyState === 4){
           if(request.status>=200 && request.status<300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }  else{
                alert('CSS加载失败')
            } 
        }
    }
    request.send()
}

getXml.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/4.xml')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
           const dom = request.responseXML
           const text = dom.getElementsByTagName('warning')[0].textContent.trim()
           console.log(text)
        }
    }
    request.send()
}

getJson.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            const obj = JSON.parse(request.response)
            myName.textContent = obj.name
        }
        
    }
    request.send()
}


let n = 1
getPage.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n+1}.json`)
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                const arr = JSON.parse(request.response)
                arr.forEach(element => {
                  const li = document.createElement('li')
                  li.textContent = element.id  
                  xxx.appendChild(li)
                })
            }
        }
    }
    n+=1
    request.send()
}