// 글 추가 버튼
const addContent = document.querySelector('.addContent');
// 글 구역
const content = document.querySelector('.content');

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

  const newPostContent = document.createElement('textarea');
  newPostContent.placeholder = '내용을 입력해주세요.';
  newPostContent.classList.add('newPostContent');

  const uploadPost = document.createElement('button');
  uploadPost.classList.add('uploadPost');
  uploadPost.textContent = '저장하기';

  newPost.appendChild(newPostHeader);
  newPost.appendChild(newPostDate);
  newPost.appendChild(newPostContent);
  newPost.appendChild(uploadPost);
  content.appendChild(newPost);
  content.insertBefore(newPost, content.firstChild);
});

const uploadButton = document.querySelector('.uploadPost');
