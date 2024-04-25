<?php   
$allowedTypes = ['jpg','jpeg','png','gif','mp4','mov','pdf','doc','txt']; 
$maxSize = 500 * 1024 * 1024;  
if(isset($_FILES['file'])){
    $file = $_FILES['file'];      
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileSize = $file['size'];
    echo "接收到文件: " . basename($fileName) . ",大小:{$fileSize} Bytes";   
    $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));
    if (!in_array($fileExt, $allowedTypes)) {
        echo "文件类型不允许!";
        return;
    }
    if($fileSize > $maxSize) {
        echo "文件大小超过限制!";
        return; 
    }   
    $uploadFile = 'images/' . $fileName;
    if(move_uploaded_file($fileTmpName, $uploadFile)) {
       echo $uploadFile . " 上传成功!";
    } else {
       echo "文件保存失败!";
    }
} else {
    echo "没有选择文件!";
}
?>