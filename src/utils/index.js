export const getSearchedLectures = (lectures_data, keyword) => {
    return lectures_data?.filter((v) => {
        if (v.course_name.indexOf(keyword) != -1) return true;
        else {
            if(v.professor.indexOf(keyword) != -1) return true;
            else return false;
        }
    });
}