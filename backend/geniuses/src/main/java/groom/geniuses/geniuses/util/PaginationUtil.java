package groom.geniuses.geniuses.util;

import lombok.experimental.UtilityClass;

@UtilityClass
public class PaginationUtil {
    public int getTotalPage(int total, int pageSize) {
        int result = total / pageSize;
        if (total % pageSize > 0) {
            return result + 1;
        } else {
            return result;
        }
    }
}
