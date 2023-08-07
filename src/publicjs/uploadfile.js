 // 生成文件切片
 // 切片大小（200kb）
 import axiosRequest from "axios"
 const SIZE = 10 * 1024

 function createFileChunk(file, size = SIZE) {
     // debugger
     const fileChunkList = []
     let cur = 0,
         index = 0;
     while (cur < file.size) {
         fileChunkList.push({
             file: file.slice(cur, cur + size),
             index:index+1
         })
         cur += size;
         
     }
     console.log(fileChunkList, "fileChunkList")
     return fileChunkList
 }
 //  上传文件
 const upLoadFiles = (e, size) => {
    const file = e.target.files[0];
    debugger
    let chunkList =createFileChunk(file)
     return new Promise((resolve,reject)=>{
     let _sliceBlob=new Blob(chunkList).slice(0,file.length);
     uploadFile(_sliceBlob)
    //  const reader = new FileReader();
    //  reader.readAsDataURL(_sliceBlob)
    //  reader.onload=function(){
    //     resolve(reader.result)
    //  }
    //  if (file && file.size < size) {
    //      filerList = createFileChunk(file)
        
    //  } else {
    //      console.log("文件超出大小了!")
    //  }
     })
 }
 async function uploadFile(list) {
    const requestList = list.map(({file,fileName,index,chunkName}) => {
        const formData = new FormData() // 创建表单类型数据
        formData.append('file', file)//该文件
        formData.append('fileName', fileName)//文件名
        formData.append('chunkName', chunkName)//切片名
        return {formData,index}
    })
        .map(({formData,index}) =>axiosRequest({
            method: 'post',
            url: 'http://localhost:3000/upload',//请求接口，要与后端一一一对应
            data: formData
        })
            .then(res => {
                console.log(res);
                //显示每个切片上传进度
                let p = document.createElement('p')
                p.innerHTML = `${list[index].chunkName}--${res.data.message}`
                document.getElementById('progress').appendChild(p)
            })
        )
        await Promise.all(requestList)//保证所有的切片都已经传输完毕
}

// 上传图片
function upLoadImage(e){
   return new Promise((resolve, reject)=>{
     // debugger
     let file=e.target.files[0];
     let _sliceBlob=new Blob([file]).slice(0,file.length);
     let _sliceFile=new File([_sliceBlob],"test.png");
     let fr=new FileReader();
     fr.readAsDataURL(_sliceBlob) 
          fr.onload=function(){
            resolve(fr.result)
           }
         
   })
    } 

 export {
     createFileChunk,
     upLoadFiles,
     upLoadImage,
     
 }