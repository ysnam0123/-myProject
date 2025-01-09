// 글 추가 버튼
const addContent = document.querySelector('.addContent');
// 글 구역
const content = document.querySelector('.content');

let categoryArray = ['기본 카테고리'];
addContent.addEventListener('click', () => {
  // 이미 생성된 글이 있으면 추가하지 않음
  if (content.querySelector('.newPost')) {
    return;
  }
  const newPost = document.createElement('div');
  newPost.classList.add('newPost');

  const newPostHeader = document.createElement('input');
  newPostHeader.placeholder = '제목을 입력해주세요.';
  newPostHeader.type = 'text';
  newPostHeader.classList.add('newPostHeader');

  const newPostDate = document.createElement('input');
  newPostDate.type = 'date';
  newPostDate.classList.add('newPostDate');

  const newPostCategory = document.createElement('select');
  newPostCategory.classList.add('newPostCategory');

  // 옵션 생성
  const defaultOption = document.createElement('option');
  defaultOption.value = '기본 카테고리'; // 옵션 값
  defaultOption.textContent = categoryArray[0]; // 옵션 텍스트

  // 옵션 추가
  newPostCategory.appendChild(defaultOption);

  const newPostContent = document.createElement('textarea');
  newPostContent.placeholder = '내용을 입력해주세요.';
  newPostContent.classList.add('newPostContent');

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const uploadPost = document.createElement('button');
  uploadPost.classList.add('uploadPost');
  uploadPost.textContent = '저장하기';

  const cancelUpload = document.createElement('button');
  cancelUpload.classList.add('uploadPost');
  cancelUpload.textContent = '취소하기';

  // 새 글 추가 버튼 클릭 시 새 글로 추가
  uploadPost.addEventListener('click', () => {
    // 제목과 내용이 비어 있으면 경고
    if (
      newPostHeader.value.trim() === '' ||
      newPostContent.value.trim() === ''
    ) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    // 새 글을 content에 추가
    const post = document.createElement('div');
    post.classList.add('post');
    const postCategory = document.createElement('h5');
    postCategory.classList.add('categoryName');
    postCategory.textContent = '카테고리 : ' + newPostCategory.value;

    const postHeader = document.createElement('h1');
    postHeader.classList.add('postHeader');
    postHeader.textContent = newPostHeader.value;

    const postDate = document.createElement('p');
    postDate.classList.add('postDate');
    postDate.textContent = newPostDate.value;

    const postContent = document.createElement('div');
    postContent.classList.add('postContent');
    postContent.textContent = newPostContent.value;

    const comment = document.createElement('div');

    post.appendChild(postCategory);
    post.appendChild(postHeader);
    post.appendChild(postDate);
    post.appendChild(postContent);

    // 새 글을 content 구역에 추가
    content.insertBefore(post, content.firstChild);

    // 입력창 초기화
    newPostHeader.value = '';
    newPostDate.value = '';
    newPostContent.value = '';
    newPostCategory.value = '';

    // 새로운 글 작성 폼 제거
    content.removeChild(newPost);
  });
  // upload cancel
  cancelUpload.addEventListener('click', () => {
    const cancelMessage = confirm('취소하겠습니까?');

    if (cancelMessage) {
      alert('취소되었습니다.');
      newPost.remove();
    } else {
      return;
    }
  });

  buttons.appendChild(uploadPost);
  buttons.appendChild(cancelUpload);
  newPost.appendChild(newPostCategory);
  newPost.appendChild(newPostHeader);
  newPost.appendChild(newPostDate);
  newPost.appendChild(newPostContent);

  newPost.appendChild(buttons);
  content.appendChild(newPost);
  content.insertBefore(newPost, content.firstChild);
});
