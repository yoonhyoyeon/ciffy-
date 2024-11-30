export const getSearchedLectures = async (lectures_data, keyword, sort) => {
    await new Promise((resolve) => setTimeout(resolve, 250));
    const searchedLectures = lectures_data?.filter((v) => {
        if (v.course_name.indexOf(keyword) != -1) return true;
        else {
            if(v.professor.indexOf(keyword) != -1) return true;
            else return false;
        }
    });
    if(sort === "0") return searchedLectures.sort((a,b) => b.avg_rating - a.avg_rating);
    else if(sort === "1") return searchedLectures.sort((a, b) => a.course_name.toLowerCase() < b.course_name.toLowerCase() ? -1 : 1);;
}

export const countReviewValues = (target, reviews, field_cnt) => {
    let result=new Array(field_cnt).fill(0);
    reviews?.forEach((v) => {
        return result[v[target]-1]+=1;
    });
    return result;
}
